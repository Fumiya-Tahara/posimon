<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posimons extends Model
{
    use HasFactory;

// 以下を追加
protected $fillable = [
    'name',
    'ecology',
    'rarity',
    'profile',
];
}
