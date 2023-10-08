<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PositiveConversion;

class PositiveConversionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PositiveConversion::create([
            'positive_theme_id' => 1,
            'user_id' => 2,
            'converted_word' => 'よく寝た。'
        ]);

        PositiveConversion::create([
            'positive_theme_id' => 2,
            'user_id' => 1,
            'converted_word' => '備蓄した。'
        ]);

        PositiveConversion::create([
            'positive_theme_id' => 2,
            'user_id' => 3,
            'converted_word' => 'イメチェンした。'
        ]);

        PositiveConversion::create([
            'positive_theme_id' => 3,
            'user_id' => 2,
            'converted_word' => '俺が無職っていうか、職が無俺。'
        ]);

    }
}
