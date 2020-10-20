<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Faculty;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a list of all Faculties.
     *
     * @return \Illuminate\Http\Response
     */
    public function faculties()
    {
        $faculties = Faculty::all();

        return response()->json($faculties, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departments = Department::orderBy('created_at', 'asc')->paginate();

        return response()->json($departments, 200);
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
            'faculty_id' => 'required',
            'code' => 'required|string|unique:departments',
            'name' => 'required|string',
        ]);
        $department = new Department();
        $department->faculty_id = $request->faculty_id;
        $department->code = $request->code;
        $department->name = $request->name;

        if ($department->save()) {
            return response()->json($department, 200);
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
    public function show(Department $department)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        $request->validate([
            'faculty_id' => 'required|string',
            'code' => 'required|string|unique:departments',
            'name' => 'required|string',
        ]);

        $department->faculty_id = $request->faculty_id;
        $department->code = $request->code;
        $department->name = $request->name;

        if ($department->save()) {
            return response()->json($department, 200);
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
    public function destroy(Department $department)
    {
        if ($department->delete()) {
            return response()->json([
                'message' => 'Department deleted successfully',
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
