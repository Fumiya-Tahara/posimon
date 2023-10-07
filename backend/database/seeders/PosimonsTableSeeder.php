<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Posimon;

class PosimonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Posimon::create([
            'name' => 'ぽじねこ',
            'ecology' => 'ようきなおんがくをきくとからだじゅうにちからがみなぎりおどらずにはいられなくなるのだ。',
            'rarity' => 1,
            'profile' => 'ポジティブなねこ。',
        ]);

        Posimon::create([
            'name' => 'ぽじみか',
            'ecology' => '自分のテリトリーに見事な花園を作る。首まわりの赤い花のパワーを引き出す。',
            'rarity' => 1,
            'profile' => 'ア○ミカとは無関係。',
        ]);

        Posimon::create([
            'name' => 'ぽーらんど',
            'ecology' => 'ひととくらすのがすきらしい。やせいでつかまえてもみっかもたてばひとになつくようになる。',
            'rarity' => 1,
            'profile' => 'ロ○ランドとは無関係。',
        ]);
    }
}
