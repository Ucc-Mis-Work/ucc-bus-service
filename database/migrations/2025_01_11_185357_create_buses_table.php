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
        Schema::create('buses', function (Blueprint $table) {
            $table->id('bus_id');
            $table->string('name');
            $table->string('bus_type');
            $table->string('driver_name');
            $table->string('driver_contact');
            $table->string('bus_cordinator_name');
            $table->string('bus_cordinator_number')->unique();
            $table->string('bus_number')->unique();
            $table->integer('bus_capacity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buses');
    }
};
