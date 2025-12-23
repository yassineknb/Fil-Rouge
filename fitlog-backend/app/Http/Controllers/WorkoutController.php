<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WorkoutController extends Controller
{
    /**
     * Display a listing of the resource.
     * Accessible by any authenticated user.
     * Returns the user's workouts.
     */
    public function index(Request $request)
    {
        // Users should see their own workouts.
        // Admins might want to see all? For now, standard behavior is "my workouts".
        $workouts = $request->user()->workouts()->with('exercises')->latest()->get();

        return response()->json($workouts);
    }

    /**
     * Store a newly created resource in storage.
     * Protected by 'manage-workouts' permission (via Middleware).
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scheduled_at' => 'nullable|date',
        ]);

        // Create workout for the authenticated user
        $workout = $request->user()->workouts()->create($validated);

        return response()->json($workout, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $workout = Workout::with('exercises')->findOrFail($id);

        // Ownership check via Policy
        $this->authorize('view', $workout);

        return response()->json($workout);
    }

    /**
     * Update the specified resource in storage.
     * Protected by 'manage-workouts' permission (via Middleware) AND ownership (via Policy).
     */
    public function update(Request $request, string $id)
    {
        $workout = Workout::findOrFail($id);

        // Ownership check via Policy
        $this->authorize('update', $workout);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'scheduled_at' => 'nullable|date',
        ]);

        $workout->update($validated);

        return response()->json($workout);
    }

    /**
     * Remove the specified resource from storage.
     * Protected by 'admin' role (via Middleware).
     */
    public function destroy(string $id)
    {
        // If protected by 'role:admin' middleware, we assume only admins reach here.
        // Admins can delete any workout.

        $workout = Workout::findOrFail($id);

        // Optionally, if we wanted to use policy: $this->authorize('delete', $workout);
        // But prompt explicitly asked for "Protected by role admin" which implies the middleware handles the gatekeeping.

        $workout->delete();

        return response()->json(['message' => 'Workout deleted successfully']);
    }
}
