<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleAuthController;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);
Route::post('register',[AuthController::class,'register']);



Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirectToGoogle']);
Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']); 

