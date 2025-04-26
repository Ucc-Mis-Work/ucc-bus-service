<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ticket;

class TicketController extends Controller
{
    //
    public function index()
    {
        $tickets = Ticket::all();

        return response()->json([
            'status' => true,
            'message' => 'Tickets retrieved successfully',
            'data' => $tickets
        ]);
    }
    public function show($id)
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json([
                'status' => false,
                'message' => 'Ticket not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Ticket retrieved successfully',
            'data' => $ticket
        ]);
    }   

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'schedule_id' => 'required|exists:schedules,id',
            'route_id' => 'required|exists:routes,id',
            'food_order_id' => 'nullable|exists:food_orders,id',
            'parcel_booking_id' => 'nullable|exists:parcel_bookings,id',
            'amount' => 'required|numeric',
            'seat_number' => 'required|string',
            'status' => 'required|in:booked,cancelled,completed',
        ]);

        $ticket = Ticket::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Ticket created successfully',
            'data' => $ticket
        ]);
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json([
                'status' => false,
                'message' => 'Ticket not found',
            ], 404);
        }

        $request->validate([
            'user_id' => 'sometimes|exists:users,id',
            'schedule_id' => 'sometimes|exists:schedules,id',
            'route_id' => 'sometimes|exists:routes,id',
            'food_order_id' => 'sometimes|exists:food_orders,id',
            'parcel_booking_id' => 'sometimes|exists:parcel_bookings,id',
            'amount' => 'sometimes|numeric',
            'seat_number' => 'sometimes|string',
            'status' => 'sometimes|in:booked,cancelled,completed',
        ]);

        $ticket->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Ticket updated successfully',
            'data' => $ticket
        ]);
    }
}
