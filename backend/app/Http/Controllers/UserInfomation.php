<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserInfomation extends Controller
{
    public function update_setposimon($user_id,$posimon_id){
        $user = User::find($user_id);
        $user->update([  
            "setting_posimon_id" => $posimon_id,  
        ]);  
    }
    public function add_user(Request $request) {
        $user =$request->input('name');
        $email =$request->input('email');
        $setting_posimon_id =1;
        $password =$request->input('password');
        User::create([
            'name' => $user,
            'email' => $email,
            'setting_posimon_id' => $setting_posimon_id,
            'password' => $password,
        ]);
        return view('hello');
    }
    
}
