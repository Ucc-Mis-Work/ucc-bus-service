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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ticket_id')->constrained();
            $table->foreignId('food_order_id')->constrained();
            $table->foreignId('parcel_booking_id')->constrained();
            $table->decimal('amount', 8, 2);
            $table->enum('payment_method', ['cash', 'credit_card', 'mobile_payment']);
            $table->enum('payment_status', ['pending', 'completed', 'failed']);
            $table->string('transaction');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
