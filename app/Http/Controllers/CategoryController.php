<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::orderBy('created_at', 'asc')->paginate();

        return response()->json($categories, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string|min:5',
        ]);
        $category = new Category();
        $category->name = $request->name;
        $category->description = $request->description;

        //for file storage
        // $path = $request->file('image')->store('categories_images');
        // $category->image = $path;
        if ($category->save()) {
            return response()->json($category, 200);
        } else {
            return response()->json([
                'message' => 'Some error occured. Please try again.',
                'status_code' => 500,
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string|min:5',
        ]);

        $category->name = $request->name;
        $category->description = $request->description;

        if ($category->save()) {
            return response()->json($category, 200);
        } else {
            return response()->json([
                'message' => 'Some error occured. Please try again.',
                'status_code' => 500,
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->delete()) {
            return response()->json([
                'message' => 'Category deleted successfully',
                'status_code' => 200,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured. Please try again.',
                'status_code' => 500,
            ], 500);
        }
    }
}
