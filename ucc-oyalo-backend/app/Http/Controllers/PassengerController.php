<?php

namespace App\Http\Controllers;
use App\Models\Passenger;

use Illuminate\Http\Request;

class PassengerController extends Controller
{
    //
    public function index()
    {
        //
        $passenger= passenger::all();
        return response()->json([
            'status' => true,
            'message' => 'Passenger retrieved successfully',
            'data' => $passenger
        ]);
    }

    public function show($id)
    {
        //
        $passenger= passenger::find($id);
        if (!$passenger) {
            return response()->json([
                'status' => false,
                'message' => 'Passenger not found',
            ], 404);
        }
        return response()->json([
            'status' => true,
            'message' => 'Passenger retrieved successfully',
            'data' => $passenger
        ]);
    }

    public function store(Request $request)
    {
        //

        $request->validate([
            'user_id' => 'required|integer',
            'bus_id' => 'required|integer',
            'route_id' => 'required|integer',
            'seat_number' => 'required|string',
            'status' => 'required|string',
            'payment_id' => 'required|integer',
        ]);
        // Validate the request data
        $passenger= passenger::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Passenger created successfully',
            'data' => $passenger
        ]);
    }

    public function update(Request $request, $id)
    {
        //
        $passenger= passenger::find($id);
        if (!$passenger) {
            return response()->json([
                'status' => false,
                'message' => 'Passenger not found',
            ], 404);
        }
        $request->validate([
            'user_id' => 'required|integer',
            'bus_id' => 'required|integer',
            'route_id' => 'required|integer',
            'seat_number' => 'required|string',
            'status' => 'required|string',
            'payment_id' => 'required|integer',
        ]);
        $passenger->update($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Passenger updated successfully',
            'data' => $passenger
        ]);
    }
}
