<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserInfomation;
use App\Http\Controllers\PosimonControllers;

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
Route::get('/add_posimon', function () {
    return view('add_posimon');
});
Route::post('/add_user', [UserInfomation::class, 'add_user']);
Route::post('/add_posimon', [PosimonControllers::class, 'add_posimon']);
Route::get('/get_posimon', [PosimonControllers::class, 'get_posimon']);