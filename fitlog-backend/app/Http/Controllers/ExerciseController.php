<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use App\Models\Workout;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $workoutId)
    {
        $workout = Workout::findOrFail($workoutId);

        // Check if user can view the workout (Ownership or Admin)
        $this->authorize('view', $workout);

        $exercises = $workout->exercises()->latest()->get();

        return response()->json($exercises);
    }

    /**
     * Store a newly created resource in storage.
     * Protected by 'manage-exercises' (Middleware) and Workout Ownership (Logic).
     */
    public function store(Request $request, $workoutId)
    {
        $workout = Workout::findOrFail($workoutId);

        // Ideally, we check if the user can UPDATE the workout to add exercises to it.
        // Re-using 'view' is too lenient, using 'update' policy for workout is better 
        // as it implies ownership + manage-workouts (which is distinct from manage-exercises).
        // BUT strict requirement is: "Protege par permission manage-exercises et ownership du workout".
        // Let's rely on manual check:
        // 1. Ownership: $workout->user_id === $user->id
        // 2. Permission: Middleware handles 'manage-exercises'.

        // Wait, standard Users might NOT have 'manage-workouts', but HAVE 'manage-exercises'.
        // So they can't create WORKOUTS, but can they add exercises to existing ones?
        // If they created the workout (maybe in past?), they own it.
        // Let's enforce ownership strictly.

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

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $exercise = Exercise::with('workout')->findOrFail($id);

        // Policy 'update' checks: Ownership of parent workout + manage-exercises permission
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $exercise = Exercise::with('workout')->findOrFail($id);

        // Policy 'delete' checks: Ownership + manage-exercises
        $this->authorize('delete', $exercise);

        $exercise->delete();

        return response()->json(['message' => 'Exercise deleted successfully']);
    }
}
