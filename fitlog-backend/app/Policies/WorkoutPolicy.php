<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Workout;
use Illuminate\Auth\Access\Response;

class WorkoutPolicy
{

    public function before(User $user, string $ability): bool|null
    {
        if ($user->hasRole('admin')) {
            return true;
        }
        return null;
    }


    public function viewAny(User $user): bool
    {
        return true;
    }


    public function view(User $user, Workout $workout): bool
    {
        return $user->id === $workout->user_id;
    }


    public function create(User $user): bool
    {
        return $user->hasPermission('manage-workouts');
    }


    public function update(User $user, Workout $workout): bool
    {
        return $user->id === $workout->user_id && $user->hasPermission('manage-workouts');
    }


    public function delete(User $user, Workout $workout): bool
    {
        return $user->id === $workout->user_id && $user->hasPermission('manage-workouts');
    }
}
