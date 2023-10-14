<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Positive_conversions extends Model
{
    use HasFactory;
    protected $fillable = [
        'positive_theme_id',
        'user_id',
        'converted_word',
    ];
}
