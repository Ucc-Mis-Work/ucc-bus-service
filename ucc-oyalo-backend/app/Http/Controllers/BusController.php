<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bus;

class BusController extends Controller
{
    //
    public function index()
    {
        $buses = Bus::all();
        return response()->json(
            [
                'message' => 'Buses retrieved successfully',
                'status' => true,
                'buses' => $buses,
            ],
            200
        );
    }
    public function show($id)
    {
        $bus = Bus::find($id);
        if (!$bus) {
            return response()->json(
                [
                    'message' => 'Bus not found',
                    'status' => false,
                ],
                404
            );
        }
        return response()->json(
            [
                'message' => 'Bus retrieved successfully',
                'status' => true,
                'bus' => $bus,
            ],
            200
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'bus_type' => 'required|string|max:255',
            'bus_color' => 'required|string|max:255',
            'passenger_id' => 'required|exists:passengers,id',
            'driver_id' => 'required|exists:drivers,id',
            'route_id' => 'required|exists:routes,id',
            'schedule_id' => 'required|exists:schedules,id',
            'bus_license_number' => 'required|string|max:255',
            'bus_status' => 'required|string|max:255',
            'bus_registration_number' => 'required|string|max:255',
            'bus_cordinator_name' => 'required|string|max:255',
            'bus_cordinator_number' => 'required|string|max:255',
            'bus_capacity' => 'required|integer|min:1',
        ]);

        $bus = Bus::create($request->all());

        return response()->json(
            [
                'message' => 'Bus created successfully',
                'status' => true,
                'bus' => $bus,
            ],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $bus = Bus::find($id);
        if (!$bus) {
            return response()->json(
                [
                    'message' => 'Bus not found',
                    'status' => false,
                ],
                404
            );
        }

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'bus_type' => 'sometimes|required|string|max:255',
            'bus_color' => 'sometimes|required|string|max:255',
            'passenger_id' => 'sometimes|required|exists:passengers,id',
            'driver_id' => 'sometimes|required|exists:drivers,id',
            'route_id' => 'sometimes|required|exists:routes,id',
            'schedule_id' => 'sometimes|required|exists:schedules,id',
            'bus_license_number' => 'sometimes|required|string|max:255',
            'bus_status' => 'sometimes|required|string|max:255',
            'bus_registration_number' => 'sometimes|required|string|max:255',
            'bus_cordinator_name' => 'sometimes|required|string|max:255',
            'bus_cordinator_number' => 'sometimes|required|string|max:255',
            'bus_capacity' => 'sometimes|required|integer|min:1',
        ]);

        $bus->update($request->all());

        return response()->json(
            [
                'message' => 'Bus updated successfully',
                'status' => true,
                'bus' => $bus,
            ],
            200
        );
    }
}
