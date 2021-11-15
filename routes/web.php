<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Index principal
Route::get('/', function () {
    return view('/public/index');
});

Auth::routes();
// Admin 
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


// Route::get('/{anypath}', [HomeController::class, 'index'])->where('path','.*');


Route::group(['middleware' => ['auth']], function () {
    // Category
    Route::post('/add-category', [CategoryController::class, 'add_category']);
    Route::get('/all-category', [CategoryController::class, 'all_category']);
    Route::get('/delete-category/{id}', [CategoryController::class, 'delete_category']);
    Route::get('/edit-category/{id}', [CategoryController::class, 'edit_category']);
    Route::post('/update-category/{id}', [CategoryController::class, 'update_category']);

    // Post
    Route::get('/all-post', [PostController::class, 'all_post']);
    Route::post('/save-post', [PostController::class, 'save_post']);
    Route::get('/delete-post/{id}', [PostController::class, 'delete_post']);
    Route::get('/edit-post/{id}', [PostController::class, 'edit_post']);
    Route::post('/update-post/{id}', [PostController::class, 'update_post']);

    //  BlogPost
    Route::get('/all-blogpost', [BlogController::class, 'all_blog_post']);
    Route::get('/get-singleblogpost/{id}', [BlogController::class, 'sigle_blog_post']);
});
