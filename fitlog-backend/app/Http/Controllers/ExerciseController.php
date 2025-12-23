<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use App\Models\Workout;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{

    public function index(Request $request, $workoutId)
    {
        $workout = Workout::findOrFail($workoutId);

        $this->authorize('view', $workout);

        $exercises = $workout->exercises()->latest()->get();

        return response()->json($exercises);
    }


    public function store(Request $request, $workoutId)
    {
        $workout = Workout::findOrFail($workoutId);



        if ($request->user()->id !== $workout->user_id && !$request->user()->hasRole('admin')) {
            abort(403, 'Unauthorized access to this workout.');
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sets' => 'required|integer|min:0',
            'reps' => 'required|integer|min:0',
            'weight' => 'required|numeric|min:0',
            'notes' => 'nullable|string',
        ]);

        $exercise = $workout->exercises()->create($validated);

        return response()->json($exercise, 201);
    }


    public function update(Request $request, string $id)
    {
        $exercise = Exercise::with('workout')->findOrFail($id);

        $this->authorize('update', $exercise);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'sets' => 'sometimes|required|integer|min:0',
            'reps' => 'sometimes|required|integer|min:0',
            'weight' => 'sometimes|required|numeric|min:0',
            'notes' => 'nullable|string',
        ]);

        $exercise->update($validated);

        return response()->json($exercise);
    }


    public function destroy(string $id)
    {
        $exercise = Exercise::with('workout')->findOrFail($id);

        $this->authorize('delete', $exercise);

        $exercise->delete();

        return response()->json(['message' => 'Exercise deleted successfully']);
    }
}
