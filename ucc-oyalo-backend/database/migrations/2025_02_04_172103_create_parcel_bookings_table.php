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
        Schema::create('parcel_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('passenger_id');
            $table->foreignId('delivery_person_id');
            $table->decimal('weight');
            $table->decimal(column: 'cost');
            $table->enum('status', ['pending', 'in_transit', 'delivered', 'cancelled']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parcel_bookings');
    }
};
