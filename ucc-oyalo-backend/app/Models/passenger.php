<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class passenger extends Model
{
    //
    protected $fillable= [
        'user_id',
        'bus_id',
        'route_id',
        'seat_number',
        'status',
        'payment_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function bus()
    {
        return $this->belongsTo(Bus::class);
    }
    public function route()
    {
        return $this->belongsTo(Route::class);
    }
    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }
}
