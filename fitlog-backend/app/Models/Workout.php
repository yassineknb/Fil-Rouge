<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'scheduled_at',
        'type', // Musculation, Cardio, HIIT, etc.
        'duration',
        'calories_burned',
        'exercises_count', // Cached count for performance or user Target
        'status', // Planned, Completed, Skipped
        'description',
    ];

    protected $casts = [
        'scheduled_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function exercises()
    {
        return $this->hasMany(Exercise::class);
    }
}
