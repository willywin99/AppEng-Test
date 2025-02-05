<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Ramsey\Uuid\Uuid; // Import UUID library

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'id' => Uuid::uuid4()->toString(), // Generate UUID
            'nama' => 'Imron',
            'telp' => '081234567890',
        ]);

        User::create([
            'id' => Uuid::uuid4()->toString(), // Generate UUID
            'nama' => 'Juli Gajah Mada',
            'email' => 'Sammy@mail.com',
            'telp' => '0987654321',
        ]);
    }
}
