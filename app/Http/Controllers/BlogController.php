<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function all_blog_post()
    {
        $posts = Post::with('user', 'category')->orderBy('id', 'desc')->get();
        return response()->json([
            'posts' => $posts,
        ], 200);
    }

    public function sigle_blog_post($id)
    {

        $posts = Post::with('user', 'category')->where('id', $id)->first();
        return response()->json([
            'posts' => $posts,
        ], 200);
    }
}
