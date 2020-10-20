<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Department;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a list of all Faculties.
     *
     * @return \Illuminate\Http\Response
     */
    public function departments()
    {
        $departments = Department::all();

        return response()->json($departments, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::orderBy('created_at', 'asc')->paginate();

        return response()->json($courses, 200);
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
            'department_id' => 'required',
            'code' => 'required|string|unique:courses',
            'name' => 'required|string',
        ]);
        $course = new Course();
        $course->department_id = $request->department_id;
        $course->code = $request->code;
        $course->name = $request->name;

        if ($course->save()) {
            return response()->json($course, 200);
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
    public function show(Course $course)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        $request->validate([
            'department_id' => 'required',
            'code' => 'required|string|unique:courses',
            'name' => 'required|string',
        ]);

        $course->department_id = $request->department_id;
        $course->code = $request->code;
        $course->name = $request->name;

        if ($course->save()) {
            return response()->json($course, 200);
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
    public function destroy(Course $course)
    {
        if ($course->delete()) {
            return response()->json([
                'message' => 'Course deleted successfully',
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
