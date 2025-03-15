<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    public function register(Request $request){
        $field = $request->validate([
            'name' => 'required|string',
            'identifier' => 'required|string', // Can be either phone or email
            'role' => 'required|string',
            'password' => 'required|string|confirmed',
            'address' => 'required|string',
            'image' => 'nullable|string',
            'google_id' => 'nullable|string'
        ]);
        
        // Check if identifier is email or phone
        if (filter_var($field['identifier'], FILTER_VALIDATE_EMAIL)) {
            $field['email'] = $field['identifier'];
            $field['phone'] = null;
        } else {
            $field['phone'] = $field['identifier'];
            $field['email'] = null;
        }
        
        $user = User::create([
            'name' => $field['name'],
            'phone' => $field['phone'],
            'email' => $field['email'],
            'role' => $field['role'],
            'password' => bcrypt($field['password']),
            'address' => $field['address'],
            'image' => $field['image'],
            'google_id' => $field['google_id']
        ]);

        $token = $user->createToken($request->name)->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'token'=> $token
        ], 201);
    }



    public function login(Request $request)
{
    $fields = $request->validate([
        'identifier' => 'required|string', // Can be either phone or email
        'password' => 'required|string',
    ]);
    
    // Check email or phone
    $user = User::where('email', $fields['identifier'])
                ->orWhere('phone', $fields['identifier'])
                ->first();

    // Check password
    if (!$user || !Hash::check($fields['password'], $user->password)) {
        return response([
            'message' => 'Bad credentials',
        ], 401);
    }

    $token = $user->createToken($user->name)->plainTextToken;

    return response([
        'user' => $user,
        'token' => $token,
    ], 201);
}


public function logout(Request $request)
{
    $request->user()->tokens()->delete();

    return response()->json([
        'message' => 'Logged out successfully'
    ], 200);
}

}
