<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\OwnedPosimon;

class OwnedPosimonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OwnedPosimon::create([
            'user_id' => 1,
            'posimon_id' => 1,
            'exp' => 0,
        ]);

        OwnedPosimon::create([
            'user_id' => 1,
            'posimon_id' => 2,
            'exp' => 100,
        ]);

        OwnedPosimon::create([
            'user_id' => 2,
            'posimon_id' => 3,
            'exp' => 50,
        ]);

        OwnedPosimon::create([
            'user_id' => 3,
            'posimon_id' => 1,
            'exp' => 0,
        ]);
    }
}
