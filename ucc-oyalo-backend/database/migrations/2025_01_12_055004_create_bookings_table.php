<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id('booking_id');
           $table->foreignId('bus_id')->constrained()->onDelete('cascade'); 
            $table->foreignId('location_id')->constrained()->onDelete('cascade');
            $table->string('customer_name');
            $table->string('departure_date')->nullable();
            $table->decimal('price',8,2);
            $table->string('contact');
            $table->string('emergency_contact');
            $table->enum('status',['pending','completed','cancelled'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
