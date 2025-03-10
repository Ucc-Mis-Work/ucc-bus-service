<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class GoogleAuthController extends Controller
{
    //
    public function redirectToGoogle()
    {
        try {
            // This will redirect the user to Google's OAuth consent screen.
            return Socialite::driver('google')->stateless()->redirect();
        } catch (Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500); // Return an error if something goes wrong
        }
    }
    



    public function handleGoogleCallback(Request $request)
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
    
            if (!$googleUser) {
                throw new Exception("Google authentication failed. No user data returned.");
            }
    
            $user = User::updateOrCreate(
                ['google_id' => $googleUser->id],
                [
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'address' => null, // Default value for address
                    'password' => Hash::make(Str::random(12)) // Generate a random password
                ]
            );
    
            // Create a token for the user (Sanctum)
        $token = $user->createToken('oyalo'); // Generate a new access token

        // Get the plain text token
        $plainTextToken = $token->plainTextToken;
    
            return response()->json([
                'user' => $user,
                'token' => $plainTextToken
            ], 200);
        } catch (\Exception $e) {
            // Log the error to get more detailed information
            Log::error('Google authentication error: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to authenticate with Google', 'message' => $e->getMessage()], 500);
        }
    }
    
}
