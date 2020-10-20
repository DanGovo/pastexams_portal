<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class LibrarianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstname' => 'Audrey',
            'lastname' => 'Mutavayi',
            'email' => 'librarian@lib.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
        ]);
    }
}
