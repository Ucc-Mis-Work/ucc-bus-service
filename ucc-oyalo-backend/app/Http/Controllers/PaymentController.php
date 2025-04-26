<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Payment;

class PaymentController extends Controller
{
    //
    public function index()
    {
        $payments = Payment::all();
        return response()->json([
            'status' => true,
            'message' => 'Payments retrieved successfully',
            'data' => $payments
        ]);
    }

    public function show($id)
    {
        $payment = Payment::find($id);

        if (!$payment) {
            return response()->json([
                'status' => false,
                'message' => 'Payment not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Payment retrieved successfully',
            'data' => $payment
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'user_id' => 'nullable|exists:users,id',
            'food_order_id' => 'nullable|exists:food_orders,id',
            'parcel_booking_id' => 'nullable|exists:parcel_bookings,id',
            'amount' => 'required|numeric',
            'payment_method' => 'required|in:cash,credit_card,mobile_payment',
            'payment_status' => 'required|in:pending,completed,failed',
            'transaction' => 'required|string',
        ]);

        $payment = Payment::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Payment created successfully',
            'data' => $payment
        ]);
    }
    public function update(Request $request, $id)
    {
        $payment = Payment::find($id);

        if (!$payment) {
            return response()->json([
                'status' => false,
                'message' => 'Payment not found',
            ], 404);
        }

        $request->validate([
            'ticket_id' => 'sometimes|exists:tickets,id',
            'user_id' => 'sometimes|exists:users,id',
            'food_order_id' => 'sometimes|exists:food_orders,id',
            'parcel_booking_id' => 'sometimes|exists:parcel_bookings,id',
            'amount' => 'sometimes|numeric',
            'payment_method' => 'sometimes|in:cash,credit_card,mobile_payment',
            'payment_status' => 'sometimes|in:pending,completed,failed',
            'transaction' => 'sometimes|string',
        ]);

        $payment->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Payment updated successfully',
            'data' => $payment
        ]);
    }

}
