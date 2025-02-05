<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function companies()
    {
        return $this->hasMany(Company::class);
    }

    protected $casts = [
        'id' => 'string', // Or 'uuid' if you have a custom cast
    ];
}
