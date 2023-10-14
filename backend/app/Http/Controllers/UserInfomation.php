<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserInfomation extends Controller
{
    public function add_user(Request $request) {
        $user =$request->input('name');
        $email =$request->input('email');
        $password =$request->input('password');
        User::create([
            'name' => $user,
            'email' => $email,
            'password' => $password,
            // 'name' => "ずっと真夜中でいいのに。",
            // 'email' => "shigrteapa@google.com",
            // 'password' => "zmireamgsp98JE",
        ]);
        return view('hello');
    }
    
}
