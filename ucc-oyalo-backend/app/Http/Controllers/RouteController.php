<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Route;

class RouteController extends Controller
{
    //
    public function index()
    {
        $routes = Route::with(['town', 'region', 'city'])->get();

        return response()->json([
            'status' => true,
            'message' => 'Routes retrieved successfully',
            'data' => $routes
        ]);
    }
    public function show($id)
    {
        $route = Route::with(['town', 'region', 'city'])->find($id);

        if (!$route) {
            return response()->json([
                'status' => false,
                'message' => 'Route not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Route retrieved successfully',
            'data' => $route
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'town_id' => 'required|exists:towns,id',
            'region_id' => 'required|exists:regions,id',
            'city_id' => 'required|exists:cities,id',
            'distance' => 'required|numeric',
        ]);

        $route = Route::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Route created successfully',
            'data' => $route
        ]);
    }
    public function update(Request $request, $id)
    {
        $route = Route::find($id);

        if (!$route) {
            return response()->json([
                'status' => false,
                'message' => 'Route not found',
            ], 404);
        }

        $request->validate([
            'town_id' => 'sometimes|required|exists:towns,id',
            'region_id' => 'sometimes|required|exists:regions,id',
            'city_id' => 'sometimes|required|exists:cities,id',
            'distance' => 'sometimes|required|numeric',
        ]);

        $route->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Route updated successfully',
            'data' => $route
        ]);
    }
}
