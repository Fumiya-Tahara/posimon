<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PositiveConversion extends Model
{
    use HasFactory;

    public $fillable = [
        'converted_word',
    ];
}
