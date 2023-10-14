<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Positive_conversions;
use App\Models\Positive_thimes;


class PosithibCangeControllers extends Controller
{
    public function up_positive_conversions(Request $request) {
        $positive_theme_id =$request->input('positive_theme_id');
        $converted_word =$request->input('converted_word');
        $user_id =$request->input('user_id');
        Positive_conversions::create([
            'positive_theme_id' => $positive_theme_id,
            'converted_word' => $converted_word,
            'user_id' => $user_id,
        ]);
    }
    public function up_positive_thimes(Request $request) {
        $user_id =$request->input('user_id');
        $title =$request->input('title');
        $state =$request->input('state');
        Positive_thimes::create([
            'title' => $title,
            'user_id' => $user_id,
            'state' => $state,
        ]);
    }
    public function get_positive_thimes($user_id = -1){
        if($user_id == -1){
            $cond = ['state' => 1];
        }else{
            $cond = ['user_id' => $user_id, 'state' => 1];
        }
        $results = Positive_thimes::where($cond)->get();
        
        $results = $results->toJson(JSON_PRETTY_PRINT);
        return response($results);
    }
    public function get_positive_conversions($thimes_id){
        
        $results = Positive_thimes::where('id',$thimes_id)->get();
        $results2 = Positive_conversions::where('positive_theme_id',$thimes_id)->get();
        $data = [
            'positive_thimes' => $results,
            'positive_conversions' => $results2,
        ];
        
        return response()->json($data, 200, [], JSON_PRETTY_PRINT);
        
    }
}
