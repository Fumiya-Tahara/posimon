<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posimons;

class PosimonControllers extends Controller
{
    public function add_posimon(Request $request) {
        $user =$request->input('name');
        $ecology =$request->input('ecology');
        $rarity =$request->input('rarity');
        $profile =$request->input('profile');
        Posimons::create([
            'name' => $user,
            'ecology' => $ecology,
            'rarity' => $rarity,
            'profile' => $profile,
        ]);
        return view('hello');
    }
    public function get_posimon(){
        $total = Posimons::sum('rarity');
        $posimons = Posimons::all();
        $sum = 0;
        $hush = mt_rand(1, $total);
        $drop = 0;
        foreach ($posimons as $posimon) {
            if ($posimon->rarity +$sum >= $hush){
                $drop = $posimon->id;
            }else{
                $sum += $posimon->rarity;
            }
        }
        $drop2 = Posimons::where('id',$drop)->get();
        $drop2 = $drop2->toJson(JSON_PRETTY_PRINT);
        return response($drop2, 200);
    }
}