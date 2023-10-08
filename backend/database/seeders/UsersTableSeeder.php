<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'UserA',
            'email' => 'userA@example.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'UserB',
            'email' => 'userB@example.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'UserC',
            'email' => 'userC@example.com',
            'password' => Hash::make('password'),
        ]);
    }
}
