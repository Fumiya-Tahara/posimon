<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posimon extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'ecology',
        'rarity',
        'profile',
    ];

    public function posimon_voices(): HasMany
    {
        return $this->hasMany(PosimonVoice::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'owned_posimons');
    }
}
