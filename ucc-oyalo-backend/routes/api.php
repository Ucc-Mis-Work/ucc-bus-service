<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\DriverController;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);
Route::post('register',[AuthController::class,'register']);

//route for drivers
Route::apiResource('drivers', DriverController::class);
// Route::post('drivers/create',[DriverController::class,'create']);
// Route::put('drivers/{id}',[DriverController::class,'edit']);



Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirectToGoogle']);
Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']); 

