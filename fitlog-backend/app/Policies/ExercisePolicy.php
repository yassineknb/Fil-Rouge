<?php

namespace App\Policies;

use App\Models\Exercise;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ExercisePolicy
{




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
        return true;
    }


    public function update(User $user, Exercise $exercise): bool
    {
        return $user->id === $exercise->workout->user_id;
    }


    public function delete(User $user, Exercise $exercise): bool
    {
        return $user->id === $exercise->workout->user_id;
    }
}
