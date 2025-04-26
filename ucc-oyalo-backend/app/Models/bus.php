<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
    use HasFactory;

    protected $primaryKey = 'bus_id'; // Because you customized the primary key name

    protected $fillable = [
        'name',
        'bus_type',
        'bus_color',
        'passenger_id',
        'driver_id',
        'route_id',
        'schedule_id',
        'bus_license_number',
        'bus_status',
        'bus_registration_number',
        'bus_cordinator_name',
        'bus_cordinator_number',
        'bus_capacity',
    ];

    // Relationships
    public function passenger()
    {
        return $this->belongsTo(Passenger::class);
    }

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function route()
    {
        return $this->belongsTo(Route::class);
    }

    public function schedule()
    {
        return $this->belongsTo(Schedule::class);
    }
}
// Compare this snippet from ucc-oyalo-backend/app/Models/Passenger.php:
// <?php