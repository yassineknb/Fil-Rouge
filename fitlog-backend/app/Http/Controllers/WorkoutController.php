<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;

class WorkoutController extends Controller
{
    public function index(Request $request)
    {
        $workouts = $request->user()
            ->workouts()
            ->with(['exercises.sets'])
            ->latest()
            ->get();

        return response()->json($workouts);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'nullable|string|max:50',
            'duration' => 'nullable|string|max:50',
            'calories_burned' => 'nullable|integer',
            'exercises_count' => 'nullable|integer',
            'description' => 'nullable|string',
            'scheduled_at' => 'nullable|date',
        ]);

        $workout = $request->user()->workouts()->create($validated);

        return response()->json($workout, 201);
    }

    public function show(Request $request, $id)
    {
        $workout = $request->user()->workouts()
            ->with('exercises.sets')
            ->findOrFail($id);

        return response()->json($workout);
    }

    public function update(Request $request, $id)
    {
        $workout = $request->user()->workouts()->findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'type' => 'nullable|string|max:50',
            'duration' => 'nullable|string|max:50',
            'calories_burned' => 'nullable|integer',
            'exercises_count' => 'nullable|integer',
            'description' => 'nullable|string',
            'scheduled_at' => 'nullable|date',
        ]);

        $workout->update($validated);

        return response()->json($workout);
    }

    public function destroy($id)
    {
        $workout = request()->user()->workouts()->findOrFail($id);
        $workout->delete();

        return response()->json([
            'message' => 'Workout deleted successfully'
        ]);
    }
}
