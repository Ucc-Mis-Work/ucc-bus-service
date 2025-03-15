<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    //
    protected $table = [
        'location_id',
        'name',
        'price',
        'arrival_time',
        'departure_time',
        'destination',
        'pick_up_point',
    ];
}
