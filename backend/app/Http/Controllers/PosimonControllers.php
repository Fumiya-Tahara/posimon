<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posimons;
use App\Models\Posimon_voices;
use App\Models\OwnedPosimons;

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
    public function get_posimon($user_id){
        $total = Posimons::sum('rarity');
        $posimons = Posimons::all();
        $sum = 0;
        $hush = mt_rand(1, $total);
        $drop = 0;
        foreach ($posimons as $posimon) {
            if ($posimon->rarity +$sum >= $hush and $drop == 0){
                $drop = $posimon->id;
            }else{
                $sum += $posimon->rarity;
            }
        }
        
        $Owned = OwnedPosimons::where('user_id', $user_id)->where('posimon_id', $drop)->get();
        if($Owned->isEmpty()){
            OwnedPosimons::create([
                'user_id' => $user_id,
                'posimon_id' => $drop,
                'exp' => 0,
            ]);
        }
        $drop2 = Posimons::where('id',$drop)->get();
        $drop2 = $drop2->toJson(JSON_PRETTY_PRINT);
        return response($drop2, 200);
    }
    
    public function get_posimon_list($user_id){
        $results = OwnedPosimons::join('posimons as b', 'owned_posimons.posimon_id', '=', 'b.id')
        ->where('owned_posimons.user_id', $user_id)
        ->select('*')
        ->get();
        
        $results = $results->toJson(JSON_PRETTY_PRINT);
        return response($results);
    }
    public function get_posimon_list_full(){
        $results = Posimons::all();
        $results = $results->toJson(JSON_PRETTY_PRINT);
        return response($results);
    }
    public function add_posimon_voices(Request $request) {
        $posimon_id =$request->input('posimon_id');
        $voice =$request->input('voice');
        $state =$request->input('state');
        Posimon_voices::create([
            'posimon_id' => $posimon_id,
            'voice' => $voice,
            'state' => $state,
        ]);
        return view('hello');
    }
    public function get_posimon_voices($posimon_id){
        $results = Posimon_voices::where('posimon_id',$posimon_id)->get();
        
        $results = $results->toJson(JSON_PRETTY_PRINT);
        return response($results);
    }
}
