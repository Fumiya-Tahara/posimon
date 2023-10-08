<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PositiveTheme extends Model
{
    use HasFactory;

    public $fillable = [
        'title',
    ];

    public function posimon_conversions(): HasMany
    {
        return $this->hasMany(PositiveConversion::class);
    }
}
