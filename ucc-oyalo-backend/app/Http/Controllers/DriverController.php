<?php

namespace App\Http\Controllers;

use App\Models\drivers;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    //
    public function index()
    {
        // Fetch all drivers
        $drivers = drivers::all();
        return response()->json($drivers, 200);
    }

    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'license_number' => 'required|string|max:255',
        ]);

        // Create a new driver
        $driver = drivers::create($request->all());

        return response()->json($driver, 201);
    }

    public function edit(Resquest $request, $id)
    {
        // Find the driver by ID
        $driver = drivers::find($id);

        if (!$driver) {
            return response()->json(['message' => 'Driver not found'], 404);
        }

        // Validate the request
        $request->validate([
            'user_id' => 'sometimes|required|exists:users,id',
            'license_number' => 'sometimes|required|string|max:255',
        ]);

        // Update the driver
        $driver->update($request->all());

        return response()->json($driver, 200);
    }

    public function show($driver_id)
    {
        // Find the driver by ID
        $driver = drivers::find($driver_id);

        if (!$driver) {
            return response()->json(['message' => 'Driver not found'], 404);
        }

        return response()->json($driver, 200);
    }   
}
