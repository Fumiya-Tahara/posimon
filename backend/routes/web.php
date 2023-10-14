<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserInfomation;
use App\Http\Controllers\PosimonControllers;
use App\Http\Controllers\PosithibCangeControllers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/input', function () {
    return view('input');
});
Route::get('/input_c', function () {
    return view('input_positive_c');
});
Route::get('/input_t', function () {
    return view('input_positive_t');
});
Route::get('/add_posimon', function () {
    return view('add_posimon');
});
Route::post('/add_user', [UserInfomation::class, 'add_user']);
Route::post('/add_posimon', [PosimonControllers::class, 'add_posimon']);
Route::get('/get_posimon/{user_id}', [PosimonControllers::class, 'get_posimon']);
Route::get('/get_posimon_list/{user_id}', [PosimonControllers::class, 'get_posimon_list']);
Route::post('/add_posimon_voices', [UserInfomation::class, 'add_posimon_voices']);
Route::get('/get_posimon_voices/{posimon_id}', [PosimonControllers::class, 'get_posimon_voices']);
Route::post('/up_positive_thimes', [PosithibCangeControllers::class, 'up_positive_thimes']);
Route::post('/up_positive_conversions', [PosithibCangeControllers::class, 'up_positive_conversions']);
Route::get('/get_positive_thimes/{user_id?}', [PosithibCangeControllers::class, 'get_positive_thimes']);
Route::get('/get_positive_conversions/{thimes_id}', [PosithibCangeControllers::class, 'get_positive_conversions']);