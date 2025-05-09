<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Role::create(['name'=>'Driver']);
        Role::create(['name'=>'Admin']);
        Role::create(['name'=>'Passenger']);
        Role::create(['name'=>'DeliveryBoy']);
        Role::create(['name'=>'SubAdmin']);
        Role::create(['name'=>'RestaurantStuff']);


    }
}
