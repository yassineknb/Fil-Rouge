<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WorkoutController extends Controller
{

    public function index(Request $request)
    {

        $workouts = $request->user()->workouts()->with('exercises')->latest()->get();

        return response()->json($workouts);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scheduled_at' => 'nullable|date',
        ]);


        $workout = $request->user()->workouts()->create($validated);

        return response()->json($workout, 201);
    }


    public function show(Request $request, string $id)
    {
        $workout = Workout::with('exercises')->findOrFail($id);
        $this->authorize('view', $workout);



        return response()->json($workout);
    }


    public function update(Request $request, string $id)
    {
        $workout = Workout::findOrFail($id);
        $this->authorize('update', $workout);



        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'scheduled_at' => 'nullable|date',
        ]);

        $workout->update($validated);

        return response()->json($workout);
    }


    public function destroy(string $id)
    {


        $workout = Workout::findOrFail($id);
        $workout->delete();

        return response()->json(['message' => 'Workout deleted successfully']);
    }
}
