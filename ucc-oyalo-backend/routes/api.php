<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\UserController;
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
// Route::get('drivers',[DriverController::class,'index']);
// Route::get('drivers/{id}',[DriverController::class,'show']);
// Route::post('drivers',[DriverController::class,'store']);
// Route::put('drivers/{id}',[DriverController::class,'update']);

// route for passengers
Route::apiResource('passengers', PassengerController::class);

// route for users
Route::apiResource('users', UserController::class);
// Route::get('users',[UserController::class,'index']);
// Route::get('users/{id}',[UserController::class,'show']);
// Route::post('users',[UserController::class,'store']);
// Route::put('users/{id}',[UserController::class,'update']);

// route for payments
Route::apiResource('payments', PaymentController::class);
// Route::get('payments',[PaymentController::class,'index']);
// Route::get('payments/{id}',[PaymentController::class,'show']);
// Route::post('payments',[PaymentController::class,'store']);
// Route::put('payments/{id}',[PaymentController::class,'update']);


Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirectToGoogle']);
Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']); 

