<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class bus extends Model
{
    //
    protected $table = [
        'bus_id',
        'bus_name',
        'bus_number',
        'bus_type',
        'bus_capacity',
        'bus_cordinator_name',
        'bus_cordinator_number',
        'bus_driver',
        'bus_status',
    ];
}
