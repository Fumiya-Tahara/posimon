<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PositiveTheme;

class PositiveThemesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PositiveTheme::create([
            'title' => '朝早く起きられなかった。',
            'user_id' => 1,
        ]);

        PositiveTheme::create([
            'title' => '太った。',
            'user_id' => 1,
        ]);

        PositiveTheme::create([
            'title' => '無職になった。',
            'user_id' => 2,
        ]);
    }
}
