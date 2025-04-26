<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'ticket_id',
        'user_id',
        'food_order_id',
        'parcel_booking_id',
        'amount',
        'payment_method',
        'payment_status',
        'transaction',
    ];

    // Relationships
    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function foodOrder()
    {
        return $this->belongsTo(FoodOrder::class);
    }

    public function parcelBooking()
    {
        return $this->belongsTo(ParcelBooking::class);
    }
}
