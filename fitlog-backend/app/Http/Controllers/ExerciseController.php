<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use App\Models\Workout;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{

    public function index(Request $request, $workoutId)
    {

        $workout = $request->user()->workouts()->findOrFail($workoutId);
        $exercises = $workout->exercises()->with('sets')->oldest()->get();
        return response()->json($exercises);
    }

    public function store(Request $request, $workoutId)
    {
        $workout = $request->user()->workouts()->findOrFail($workoutId);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'notes' => 'nullable|string',
            'calories' => 'nullable|integer',
            'sets' => 'required|array',
            'sets.*.reps' => 'nullable|integer',
            'sets.*.weight' => 'nullable|numeric',
            'sets.*.rpe' => 'nullable|numeric|max:10',
        ]);

        $exercise = $workout->exercises()->create($validated);

        if (!empty($validated['sets'])) {
            $sets = collect($validated['sets'])->map(function ($set, $index) {
                return array_merge($set, ['set_number' => $index + 1]);
            })->toArray();
            $exercise->sets()->createMany($sets);
        }

        return response()->json($exercise->load('sets'), 201);
    }

    public function update(Request $request, $id)
    {
        $exercise = Exercise::whereHas('workout', function ($q) use ($request) {
            $q->where('user_id', $request->user()->id);
        })->findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'notes' => 'nullable|string',
            'calories' => 'nullable|integer',
            'sets' => 'sometimes|array',
            'sets.*.reps' => 'nullable|integer',
            'sets.*.weight' => 'nullable|numeric',
            'sets.*.rpe' => 'nullable|numeric|max:10',
        ]);

        $exercise->update($validated);

        if (isset($validated['sets'])) {
            $exercise->sets()->delete();
            $sets = collect($validated['sets'])->map(function ($set, $index) {
                return array_merge($set, ['set_number' => $index + 1]);
            })->toArray();
            $exercise->sets()->createMany($sets);
        }

        return response()->json($exercise->load('sets'));
    }

    public function destroy(string $id)
    {

        $exercise = Exercise::whereHas('workout', function ($q) {
            $q->where('user_id', request()->user()->id);
        })->findOrFail($id);

        $exercise->delete();

        return response()->json(['message' => 'Exercise deleted successfully']);
    }
}
