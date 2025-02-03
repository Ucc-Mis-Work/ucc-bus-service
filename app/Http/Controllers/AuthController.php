<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (Auth::attempt($validatedData)) {
            $request->session()->regenerate();
            return redirect()->intended('admin/dashboard');
        }
        else{
            return back()->withErrors([
                'failed'=>"The provided credentials do not match our records"
            ]);
        };
}
    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerate();
        return redirect()->route("/admin");
    }
}
