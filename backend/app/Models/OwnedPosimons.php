<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OwnedPosimons extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'posimon_id',
        'exp',
    ];
}
