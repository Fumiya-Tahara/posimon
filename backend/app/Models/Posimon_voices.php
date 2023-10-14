<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posimon_voices extends Model
{
    use HasFactory;
    protected $fillable = [
        'posimon_id',
        'voice',
        'state',
    ];
}
