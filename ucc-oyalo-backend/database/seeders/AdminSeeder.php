<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * The password to be used for the admin user.
     *
     * @var string
     */
    protected static $password;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $user=User::create([
            'name' => 'admin',
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),

        ]
        )->assignRole('Admin','Admin');
    
    }
}
