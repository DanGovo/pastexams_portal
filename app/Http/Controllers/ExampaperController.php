<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use App\Models\Exampaper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ExampaperController extends Controller
{
    /**
     * Display a listing of all categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function categories()
    {
        $categories = Category::all();

        return response()->json($categories, 200);
    }

    /**
     * Display a listing of all courses.
     *
     * @return \Illuminate\Http\Response
     */
    public function courses()
    {
        $courses = Course::all();

        return response()->json($courses, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $exampapers = Exampaper::orderBy('created_at', 'asc')->paginate();

        return response()->json($exampapers, 200);
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
            'category_id' => 'required',
            'course_id' => 'required',
            'name' => 'required',
            'year' => 'required|date',
            'paper' => 'required|mimes:pdf,doc,docx',
        ]);
        $exampaper = new Exampaper();
        $exampaper->category_id = $request->category_id;
        $exampaper->course_id = $request->course_id;
        $exampaper->name = $request->name;
        $exampaper->year = $request->year;

        if ($request->hasFile('paper')) {
            $path = $request->paper->getClientOriginalName();
            $request->paper->storeAs('exampaper_files', $path);
        }
        //$path = $request->file('paper')->store('exampaper_files');
        $exampaper->paper = $path;

        if ($exampaper->save()) {
            return response()->json($exampaper, 200);
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
    public function show(Exampaper $exampaper)
    {
        $dl = File::find($exampaper);

        return Storage::download($dl->path, $dl->title);
    }

    public function downloadFile($exampaper)
    {
        $path = '../storage/exampaperfiles/'.$exampaper;
        $header = [
      'Content-Type' => 'application/*',
      ];

        return response()->download($path, $exampaper, $header);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Exampaper $exampaper)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exampaper $exampaper)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exampaper $exampaper)
    {
    }
}
