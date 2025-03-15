<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/auth/google/redirect', function (Request $request) {
//     return Socialite::driver('google')->redirect();
// });

// Route::get('/auth/google/callback', function (Request $request) {
//     $googleUser = Socialite::driver('google')->user();
//     // return response()->json($googleUser);

//     $user = User::updateOrCreate([
//         'google_id' => $googleUser->id
//     ], [
//         'name' => $googleUser->name,
//         'email' => $googleUser->email,
//         'address' => null,
//         'password' => bcrypt(Str::random(12))
//     ]);

//     Auth::login($user);

//     // Redirect to home page after successful login
//     return redirect()->intended('/');
// });