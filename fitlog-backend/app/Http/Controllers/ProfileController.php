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

        ]);

        $user->update($validated);

        return response()->json($user);
    }


    public function stats(Request $request)
    {
        $user = $request->user();


        $startOfWeek = now()->startOfWeek();
        $endOfWeek = now()->endOfWeek();

        $workoutsThisWeek = $user->workouts()
            ->whereBetween('scheduled_at', [$startOfWeek, $endOfWeek])
            ->count();


        $totalWorkouts = $user->workouts()->count();

        $totalTime = 0;

        $firstWorkout = $user->workouts()->oldest('scheduled_at')->first();
        $weeksActive = 1;

        if ($firstWorkout && $firstWorkout->scheduled_at) {
            $weeksActive = $firstWorkout->scheduled_at->diffInWeeks(now()) + 1;
        }

        $avgFrequency = $weeksActive > 0 ? round($totalWorkouts / $weeksActive, 2) : 0;

        return response()->json([
            'workouts_this_week' => $workoutsThisWeek,
            'total_workouts' => $totalWorkouts,
            'total_training_time_minutes' => $totalTime,
            'average_workouts_per_week' => $avgFrequency,
        ]);
    }


    public function records(Request $request)
    {
        $user = $request->user();







        $uniqueNames = $user->workouts()->join('exercises', 'workouts.id', '=', 'exercises.workout_id')
            ->distinct()
            ->pluck('exercises.name');

        $finalRecords = [];

        foreach ($uniqueNames as $name) {
            $record = DB::table('exercises')
                ->join('workouts', 'exercises.workout_id', '=', 'workouts.id')
                ->where('workouts.user_id', $user->id)
                ->where('exercises.name', $name)
                ->orderByDesc('weight')
                ->select('exercises.name', 'exercises.weight as max_value', 'workouts.scheduled_at as date')
                ->first();

            if ($record) {
                $finalRecords[] = $record;
            }
        }

        return response()->json($finalRecords);
    }
}
