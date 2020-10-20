<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use Illuminate\Http\Request;

class FacultyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $faculties = Faculty::orderBy('created_at', 'asc')->paginate();

        return response()->json($faculties, 200);
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
            'code' => 'required|string|unique:faculties',
            'name' => 'required|string|min:5',
        ]);
        $faculty = new Faculty();
        $faculty->code = $request->code;
        $faculty->name = $request->name;

        if ($faculty->save()) {
            return response()->json($faculty, 200);
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
    public function show(Faculty $faculty)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Faculty $faculty)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Faculty $faculty)
    {
        $request->validate([
            'code' => 'required|string|unique:faculties',
            'name' => 'required|string|min:5',
        ]);

        $faculty->code = $request->code;
        $faculty->name = $request->name;

        if ($faculty->save()) {
            return response()->json($faculty, 200);
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
    public function destroy(Faculty $faculty)
    {
        if ($faculty->delete()) {
            return response()->json([
                'message' => 'Faculty deleted successfully',
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
