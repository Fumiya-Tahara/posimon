<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserInfomation;
use App\Http\Controllers\PosimonControllers;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/add_user', [UserInfomation::class, 'add_user']);
Route::post('/add_posimon', [PosimonControllers::class, 'add_posimon']);
Route::get('/get_posimon/{user_id}', [PosimonControllers::class, 'get_posimon']);
Route::get('/get_posimon_list/{user_id}', [PosimonControllers::class, 'get_posimon_list']);
Route::get('/get_posimon_list_full', [PosimonControllers::class, 'get_posimon_list_full']);
