<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Workout;
use App\Models\Exercise;
use Laravel\Sanctum\Sanctum;

class ExerciseFeatureTest extends TestCase
{


    public function test_admin_can_manage_any_exercise()
    {
        $admin = User::where('email', 'admin@fitlog.com')->firstOrFail();

        $workout = Workout::factory()->create(['user_id' => $admin->id, 'title' => 'Admin Workout']);

        Sanctum::actingAs($admin);


        $response = $this->postJson("/api/workouts/{$workout->id}/exercises", [
            'name' => 'Bench Press',
            'sets' => 3,
            'reps' => 10,
            'weight' => 100,
            'notes' => 'Light weight'
        ]);

        $response->assertStatus(201);
        $exerciseId = $response->json('id');


        $response = $this->putJson("/api/exercises/{$exerciseId}", [
            'name' => 'Bench Press Updated',
            'sets' => 4,
            'reps' => 8,
            'weight' => 105
        ]);
        $response->assertStatus(200);


        $response = $this->deleteJson("/api/exercises/{$exerciseId}");
        $response->assertStatus(200);
    }

    public function test_user_can_manage_own_workout_exercises()
    {
        $user = User::factory()->create();
        $userRole = \App\Models\Role::where('name', 'user')->first();
        $user->addRole($userRole);

        $workout = Workout::factory()->create(['user_id' => $user->id, 'title' => 'User Workout']);

        Sanctum::actingAs($user);


        $response = $this->postJson("/api/workouts/{$workout->id}/exercises", [
            'name' => 'Squat',
            'sets' => 5,
            'reps' => 5,
            'weight' => 120,
        ]);
        $response->assertStatus(201);
        $exerciseId = $response->json('id');


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


        $response = $this->postJson("/api/workouts/{$workoutOfUser2->id}/exercises", [
            'name' => 'Illegal Exercise',
            'sets' => 1,
            'reps' => 1,
            'weight' => 1
        ]);
        $response->assertStatus(403);


        $response = $this->putJson("/api/exercises/{$exerciseOfUser2->id}", [
            'name' => 'Hacked Name'
        ]);
        $response->assertStatus(403);


        $response = $this->deleteJson("/api/exercises/{$exerciseOfUser2->id}");
        $response->assertStatus(403);
    }
}
