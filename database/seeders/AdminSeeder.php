<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstname' => 'Daniel',
            'lastname' => 'Govo',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'role' => 'administrator',
        ]);
        User::create([
            'firstname' => 'Audrey',
            'lastname' => 'Mutavayi',
            'email' => 'librarian@admin.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
        ]);
    }
}
