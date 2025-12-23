<?php

namespace App\Policies;

use App\Models\Exercise;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ExercisePolicy
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


    public function view(User $user, Exercise $exercise): bool
    {
        return $user->id === $exercise->workout->user_id;
    }


    public function create(User $user): bool
    {
        return $user->hasPermission('manage-exercises');
    }


    public function update(User $user, Exercise $exercise): bool
    {
        return $user->id === $exercise->workout->user_id && $user->hasPermission('manage-exercises');
    }


    public function delete(User $user, Exercise $exercise): bool
    {
        return $user->id === $exercise->workout->user_id && $user->hasPermission('manage-exercises');
    }
}
