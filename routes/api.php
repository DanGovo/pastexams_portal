<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ExampaperController;
use App\Http\Controllers\FacultyController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('profile', [AuthController::class, 'profile']);
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:student'], function () {
        Route::get('get-faculties', [DepartmentController::class, 'faculties']);
        Route::resource('departments', DepartmentController::class);
    });

    Route::group(['middleware' => 'scope:administrator'], function () {
        Route::get('get-faculties', [DepartmentController::class, 'faculties']);
        Route::resource('departments', DepartmentController::class);
        Route::get('get-departments', [CourseController::class, 'departments']);
        Route::resource('courses', CourseController::class);
        Route::resource('exampapers', ExampaperController::class);
        Route::get('get-courses', [ExampaperController::class, 'courses']);
        Route::get('get-categories', [ExampaperController::class, 'categories']);
        Route::get('get-download', [ExampaperController::class, 'show']);
        //download Route
        Route::get('/download/exampaper_files/{exampaper}', [ExampaperController::class, 'downloadFile']);
    });

    Route::group(['middleware' => 'scope:librarian'], function () {
        Route::get('/librarian-scope', function () {
            return response()->json([
                    'message' => 'Librarian can access this',
                    'status_code' => 200,
                ], 200);
        });
    });
});

Route::resource('categories', CategoryController::class);
Route::resource('faculties', FacultyController::class);
