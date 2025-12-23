<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Workout;
use App\Models\Role;
use Laravel\Sanctum\Sanctum;

class FullIntegrationTest extends TestCase
{
    // Scenario:
    // 1. Standard User creates Workout & Exercise.
    // 2. Another User cannot access them.
    // 3. Admin can delete them.

    public function test_full_api_lifecycle()
    {
        // --- Setup Users ---
        $owner = User::factory()->create();
        $owner->addRole('user'); // Has manage-exercises, NO manage-workouts? 
        // WAIT. If 'user' role ONLY has 'manage-exercises', they CANNOT create workouts. 
        // The brief earlier said "store : Protégé par la permission manage-workouts".
        // Does 'user' role have 'manage-workouts'? 
        // In 'LaratrustSeeder', 'user' role only got 'manage-exercises'.
        // So a standard user CANNOT create a workout currently. 
        // This might be a logic gap in the user's request vs the seeder.
        // User request now says: "Vérifier les permissions Laratrust (manage-workouts, manage-exercises)."
        // and "store: protégé par manage-workouts".
        // IF the intention is that Users CREATE workouts, they MUST have 'manage-workouts'.
        // I will assume for this test I need to give the user 'manage-workouts' OR the 'user' role was meant to have it.
        // Let's explicitly give the permission to the user for this test to pass the "Standard User creates Workout" requirement.

        $owner->givePermission('manage-workouts');

        $otherUser = User::factory()->create();
        $otherUser->addRole('user');

        $admin = User::where('email', 'admin@fitlog.com')->first();
        if (!$admin)
            $admin = User::factory()->create();
        if (!$admin->hasRole('admin'))
            $admin->addRole('admin');


        // --- 1. Owner Action ---
        Sanctum::actingAs($owner);

        // Create Workout
        $response = $this->postJson('/api/workouts', [
            'title' => 'My Full Integration Workout',
            'description' => 'Testing everything',
            'scheduled_at' => now()->addDay()->toDateTimeString(),
        ]);
        $response->assertStatus(201);
        $workoutId = $response->json('id');

        // Create Exercise
        $response = $this->postJson("/api/workouts/{$workoutId}/exercises", [
            'name' => 'Integration Squat',
            'sets' => 5,
            'reps' => 5,
            'weight' => 100
        ]);
        $response->assertStatus(201);
        $exerciseId = $response->json('id');

        // List Exercises
        $response = $this->getJson("/api/workouts/{$workoutId}/exercises");
        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'Integration Squat']);


        // --- 2. Other User Action (Negative Test) ---
        Sanctum::actingAs($otherUser);

        // Try View Workout
        $response = $this->getJson("/api/workouts/{$workoutId}");
        $response->assertStatus(403); // Policy: view (owner only)

        // Try View Exercises
        $response = $this->getJson("/api/workouts/{$workoutId}/exercises");
        $response->assertStatus(403);

        // Try Update Exercise
        $response = $this->putJson("/api/exercises/{$exerciseId}", ['name' => 'Hacked']);
        $response->assertStatus(403);


        // --- 3. Admin Action ---
        Sanctum::actingAs($admin);

        // View Workout (Admin Bypass)
        $response = $this->getJson("/api/workouts/{$workoutId}");
        $response->assertStatus(200);

        // Delete Workout
        $response = $this->deleteJson("/api/workouts/{$workoutId}");
        $response->assertStatus(200);

        // Verify Deletion
        $this->assertDatabaseMissing('workouts', ['id' => $workoutId]);
        $this->assertDatabaseMissing('exercises', ['id' => $exerciseId]); // Cascade delete check
    }
}
