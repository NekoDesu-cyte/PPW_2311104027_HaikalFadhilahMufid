<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MahasiswaController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/insert-data1', [MahasiswaController::class, 'insertSql']);
Route::get('/insert-data2', [MahasiswaController::class, 'insertQB']);
Route::get('/insert-data3', [MahasiswaController::class, 'insertEloquent']);