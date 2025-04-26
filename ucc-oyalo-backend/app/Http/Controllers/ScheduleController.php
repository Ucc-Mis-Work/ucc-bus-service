<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    //
    public function index()
    {
        $schedules = Schedule::all();
        return response()->json(
            [
                
                'message' => 'Schedules retrieved successfully',
                'staute'=> true,
                'schedules' => $schedules,
            ],
            200
        );
    }

    public function show($id)
    {
        $schedule = Schedule::find($id);
        if (!$schedule) {
            return response()->json(
                [
                    'message' => 'Schedule not found',
                    'status' => false,
                ],
                404
            );
        }
        return response()->json(
            [
                'message' => 'Schedule retrieved successfully',
                'status' => true,
                'schedule' => $schedule,
            ],
            200
        );
    }
    public function store(Request $request)
    {
        $request->validate([
            'bus_id' => 'required|exists:buses,id',
            'route_id' => 'required|exists:routes,id',
            'city_id' => 'required|exists:cities,id',
            'departure_time' => 'required|date',
            'arrival_time' => 'required|date',
            'status' => 'required|in:scheduled,cancelled',
        ]);

        $schedule = Schedule::create($request->all());

        return response()->json(
            [
                'message' => 'Schedule created successfully',
                'status' => true,
                'schedule' => $schedule,
            ],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $schedule = Schedule::find($id);
        if (!$schedule) {
            return response()->json(
                [
                    'message' => 'Schedule not found',
                    'status' => false,
                ],
                404
            );
        }

        $request->validate([
            'bus_id' => 'sometimes|required|exists:buses,id',
            'route_id' => 'sometimes|required|exists:routes,id',
            'city_id' => 'sometimes|required|exists:cities,id',
            'departure_time' => 'sometimes|required|date',
            'arrival_time' => 'sometimes|required|date',
            'status' => 'sometimes|required|in:scheduled,cancelled',
        ]);

        $schedule->update($request->all());

        return response()->json(
            [
                'message' => 'Schedule updated successfully',
                'status' => true,
                'schedule' => $schedule,
            ],
            200
        );
    }
}
