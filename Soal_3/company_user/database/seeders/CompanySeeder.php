<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company;
use App\Models\User;
use Ramsey\Uuid\Uuid;

class CompanySeeder extends Seeder
{
    public function run()
    {
        // 1. Get the users (CRUCIAL: Do this *inside* the loop if needed)
        $users = User::all(); // Get ALL users

        foreach ($users as $user) { // Loop through each user
            if ($user->nama === 'Imron') { // Check the name INSIDE the loop
                Company::create([
                    'id' => Uuid::uuid4()->toString(),
                    'user_id' => $user->id, // Use $user->id (which is the UUID)
                    'company_code' => 'SPI',
                    'company_name' => 'Samudera',
                ]);
            }
            if ($user->nama === 'Juli Gajah Mada') { // Check the name INSIDE the loop
                Company::create([
                    'id' => Uuid::uuid4()->toString(),
                    'user_id' => $user->id, // Use $user->id (which is the UUID)
                    'company_code' => 'PIC',
                    'company_name' => 'Samudera',
                ]);
            }
        }

    }
}
