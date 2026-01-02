<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Workout;

class ProfileController extends Controller
{

    public function index(Request $request)
    {
        $user = $request->user();


        $user->load('roles', 'permissions');


        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'birth_date' => $user->birth_date,
            'current_weight' => $user->current_weight,
            'avatar_url' => $user->avatar_url,
            'roles' => $user->roles->pluck('name'),
            'permissions' => $user->permissions->pluck('name'),
        ]);
    }


    public function update(Request $request)
    {
        $user = $request->user();


        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'birth_date' => 'nullable|date',
            'current_weight' => 'nullable|numeric|between:0,999.99',
            'avatar' => 'nullable|image|max:10240',
        ]);

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $validated['avatar_url'] = '/storage/' . $path;
        }

        $user->update($validated);

        return response()->json($user);
    }


    public function stats(Request $request)
    {
        $user = $request->user();


        $workoutsThisWeek = $user->workouts()
            ->whereBetween('scheduled_at', [
                now()->startOfWeek(),
                now()->endOfWeek()
            ])
            ->count();

        $totalWorkouts = $user->workouts()->count();


        $firstWorkout = $user->workouts()->oldest('scheduled_at')->first();

        $weeksActive = $firstWorkout
            ? max(1, $firstWorkout->scheduled_at->diffInWeeks(now()) + 1)
            : 0;

        $avgFrequency = $weeksActive > 0
            ? round($totalWorkouts / $weeksActive, 2)
            : 0;

        return response()->json([
            'workouts_this_week' => $workoutsThisWeek,
            'total_workouts' => $totalWorkouts,
            'average_workouts_per_week' => $avgFrequency,

        ]);
    }



}
