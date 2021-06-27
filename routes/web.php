<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Post Route
// Route::get('/posts', [PostController::class, 'index']);

// Route::get('/{anypath}', [HomeController::class, 'index'])->where('path','.*');

// Category Routes
Route::post('/add-category',[CategoryController::class, 'add_category']);
Route::get('/all-category',[CategoryController::class, 'all_category']);
Route::get('/delete-category/{id}',[CategoryController::class, 'delete_category']);
Route::get('/edit-category/{id}',[CategoryController::class, 'edit_category']);
Route::post('/update-category/{id}',[CategoryController::class, 'update_category']);

// Post Routes
Route::get('/all-post', [PostController::class, 'all_post']);
Route::post('/save-post', [PostController::class, 'save_post']);
Route::get('/delete-post/{id}', [PostController::class, 'delete_post']);
Route::get('/edit-post/{id}', [PostController::class, 'edit_post']);
Route::post('/update-post/{id}', [PostController::class, 'update_post']);
