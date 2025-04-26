<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ScheduleController;

use App\Http\Controllers\FoodOrderController;
use App\Http\Controllers\ParcelBookingController;
use App\Http\Controllers\RouteController;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
//routes for authentication
Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);
Route::post('register',[AuthController::class,'register']);

// route for google authentication
Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirectToGoogle']);
Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']); 

//route for drivers
Route::apiResource('drivers', DriverController::class);
// Route::get('drivers',[DriverController::class,'index']);
// Route::get('drivers/{id}',[DriverController::class,'show']);
// Route::post('drivers',[DriverController::class,'store']);
// Route::put('drivers/{id}',[DriverController::class,'update']);

// route for passengers
Route::apiResource('passengers', PassengerController::class);
// Route::get('passengers',[PassengerController::class,'index']);
// Route::get('passengers/{id}',[PassengerController::class,'show']);
// Route::post('passengers',[PassengerController::class,'store']);
// Route::put('passengers/{id}',[PassengerController::class,'update']);

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

// route for tickets
Route::apiResource('tickets', TicketController::class);
// Route::get('tickets',[TicketController::class,'index']);
// Route::get('tickets/{id}',[TicketController::class,'show']);
// Route::post('tickets',[TicketController::class,'store']);
// Route::put('tickets/{id}',[TicketController::class,'update']);

// route for routes
Route::apiResource('routes', RouteController::class);
// Route::get('routes',[RouteController::class,'index']);
// Route::get('routes/{id}',[RouteController::class,'show']);
// Route::post('routes',[RouteController::class,'store']);
// Route::put('routes/{id}',[RouteController::class,'update']);

// route for schedules
Route::apiResource('schedules', ScheduleController::class);
// Route::get('schedules',[ScheduleController::class,'index']);
// Route::get('schedules/{id}',[ScheduleController::class,'show']); 
// Route::post('schedules',[ScheduleController::class,'store']);
// Route::put('schedules/{id}',[ScheduleController::class,'update']);



