<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Workout;
use App\Models\Role;
use Laravel\Sanctum\Sanctum;

class FullIntegrationTest extends TestCase
{


    public function test_full_api_lifecycle()
    {

        $owner = User::factory()->create();
        $owner = User::factory()->create();
        $owner->addRole('user');

        $owner->givePermission('manage-workouts');

        $otherUser = User::factory()->create();
        $otherUser->addRole('user');

        $admin = User::where('email', 'admin@fitlog.com')->first();
        if (!$admin)
            $admin = User::factory()->create();
        if (!$admin->hasRole('admin'))
            $admin->addRole('admin');



        Sanctum::actingAs($owner);


        $response = $this->postJson('/api/workouts', [
            'title' => 'My Full Integration Workout',
            'description' => 'Testing everything',
            'scheduled_at' => now()->addDay()->toDateTimeString(),
        ]);
        $response->assertStatus(201);
        $workoutId = $response->json('id');


        $response = $this->postJson("/api/workouts/{$workoutId}/exercises", [
            'name' => 'Integration Squat',
            'sets' => 5,
            'reps' => 5,
            'weight' => 100
        ]);
        $response->assertStatus(201);
        $exerciseId = $response->json('id');


        $response = $this->getJson("/api/workouts/{$workoutId}/exercises");
        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'Integration Squat']);



        Sanctum::actingAs($otherUser);


        $response = $this->getJson("/api/workouts/{$workoutId}");
        $response->assertStatus(403);


        $response = $this->getJson("/api/workouts/{$workoutId}/exercises");
        $response->assertStatus(403);


        $response = $this->putJson("/api/exercises/{$exerciseId}", ['name' => 'Hacked']);
        $response->assertStatus(403);



        Sanctum::actingAs($admin);


        $response = $this->getJson("/api/workouts/{$workoutId}");
        $response->assertStatus(200);


        $response = $this->deleteJson("/api/workouts/{$workoutId}");
        $response->assertStatus(200);


        $this->assertDatabaseMissing('workouts', ['id' => $workoutId]);
        $this->assertDatabaseMissing('exercises', ['id' => $exerciseId]);
    }
}
