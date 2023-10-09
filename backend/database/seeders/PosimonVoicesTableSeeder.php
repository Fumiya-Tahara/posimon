<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PosimonVoice;

class PosimonVoicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PosimonVoice::create([
            'posimon_id' => 1,
            'voice' => 'マウス違い？マウスはマウスにゃ',
            'state' => 1,
        ]);

        PosimonVoice::create([
            'posimon_id' => 1,
            'voice' => '今日も世界を一個ポジティブにするにゃん',
            'state' => 2,
        ]);

        PosimonVoice::create([
            'posimon_id' => 2,
            'voice' => '白って200色あんねん',
            'state' => 1,
        ]);

        PosimonVoice::create([
            'posimon_id' => 3,
            'voice' => '俺か俺以外か',
            'state' => 1,
        ]);
    }
}
