<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class drivers extends Model
{
    //
    protected $fillable= [
        'user_id',
        'license_number',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
 

    public function route()
    {
        return $this->hasMany(Route::class);
    }
    
    public function bus()
    {
        return $this->hasMany(bus::class);
    }
}
