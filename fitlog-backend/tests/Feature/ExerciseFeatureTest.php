<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Workout;
use App\Models\Exercise;
use Laravel\Sanctum\Sanctum;

class ExerciseFeatureTest extends TestCase
{
    // NO RefreshDatabase, relying on current seeded state or careful creation

    public function test_admin_can_manage_any_exercise()
    {
        $admin = User::where('email', 'admin@fitlog.com')->firstOrFail();

        // Create a workout owned by someone else (or admin themselves)
        $workout = Workout::factory()->create(['user_id' => $admin->id, 'title' => 'Admin Workout']);

        Sanctum::actingAs($admin);

        // 1. Create Exercise
        $response = $this->postJson("/api/workouts/{$workout->id}/exercises", [
            'name' => 'Bench Press',
            'sets' => 3,
            'reps' => 10,
            'weight' => 100,
            'notes' => 'Light weight'
        ]);

        $response->assertStatus(201);
        $exerciseId = $response->json('id');

        // 2. Update Exercise
        $response = $this->putJson("/api/exercises/{$exerciseId}", [
            'name' => 'Bench Press Updated',
            'sets' => 4,
            'reps' => 8,
            'weight' => 105
        ]);
        $response->assertStatus(200);

        // 3. Delete Exercise
        $response = $this->deleteJson("/api/exercises/{$exerciseId}");
        $response->assertStatus(200);
    }

    public function test_user_can_manage_own_workout_exercises()
    {
        // Get or Create a User with 'user' role (has manage-exercises permission)
        // We know standard user from Seeder might not have created/password known easily, 
        // so let's factory one and give valid role.

        $user = User::factory()->create();
        $userRole = \App\Models\Role::where('name', 'user')->first();
        $user->addRole($userRole);

        $workout = Workout::factory()->create(['user_id' => $user->id, 'title' => 'User Workout']);

        Sanctum::actingAs($user);

        // 1. Create Exercise
        $response = $this->postJson("/api/workouts/{$workout->id}/exercises", [
            'name' => 'Squat',
            'sets' => 5,
            'reps' => 5,
            'weight' => 120,
        ]);
        $response->assertStatus(201);
        $exerciseId = $response->json('id');

        // 2. Update Exercise
        $response = $this->putJson("/api/exercises/{$exerciseId}", [
            'name' => 'Squat Heavy',
            'sets' => 5,
            'reps' => 3,
            'weight' => 130
        ]);
        $response->assertStatus(200);
    }

    public function test_user_cannot_manage_others_workout_exercises()
    {
        $user1 = User::factory()->create();
        $user1->addRole('user');

        $user2 = User::factory()->create();
        $user2->addRole('user');

        $workoutOfUser2 = Workout::factory()->create(['user_id' => $user2->id, 'title' => 'User 2 Workout']);
        $exerciseOfUser2 = Exercise::factory()->create(['workout_id' => $workoutOfUser2->id]);

        Sanctum::actingAs($user1);

        // 1. Try Create on other's workout
        $response = $this->postJson("/api/workouts/{$workoutOfUser2->id}/exercises", [
            'name' => 'Illegal Exercise',
            'sets' => 1,
            'reps' => 1,
            'weight' => 1
        ]);
        $response->assertStatus(403);

        // 2. Try Update other's exercise
        $response = $this->putJson("/api/exercises/{$exerciseOfUser2->id}", [
            'name' => 'Hacked Name'
        ]);
        $response->assertStatus(403);

        // 3. Try Delete other's exercise
        $response = $this->deleteJson("/api/exercises/{$exerciseOfUser2->id}");
        $response->assertStatus(403);
    }
}
