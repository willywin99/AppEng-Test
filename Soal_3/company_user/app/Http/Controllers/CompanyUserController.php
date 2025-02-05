<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class CompanyUserController extends Controller
{
    public function index()
    {
        $users = User::with('companies')->get(); // Eager load companies

        return view('company_user.index', compact('users'));
    }
}
