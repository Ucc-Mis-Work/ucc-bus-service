<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class bookings extends Model
{
    //
    protected $fillable = [
        'booking_id',
        'location_id',
        'customer_name',
        'departure_date',
        'price',
        'contact',
        'emergency_contact',
        'status',
    ];
}
