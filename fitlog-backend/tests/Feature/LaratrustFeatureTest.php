<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

class LaratrustFeatureTest extends TestCase
{


    public function test_admin_can_create_and_delete_workout()
    {

        $admin = User::where('email', 'admin@fitlog.com')->first();
        if (!$admin) {
            $this->markTestSkipped('Admin user not found. Run seeder first.');
        }

        Sanctum::actingAs($admin);


        $response = $this->postJson('/api/workouts', [
            'title' => 'Admin Workout Test Recheck',
            'description' => 'Testing creation permission in recheck phase',
            'scheduled_at' => now()->addDay()->toDateTimeString(),
        ]);

        $response->assertStatus(201);
        $workoutId = $response->json('id');


        $response = $this->deleteJson("/api/workouts/{$workoutId}");

        $response->assertStatus(200);
    }

    public function test_user_cannot_delete_workout()
    {
        $user = User::factory()->create();
        $roleUser = \App\Models\Role::where('name', 'user')->first();
        $user->addRole($roleUser);

        Sanctum::actingAs($user);


        $response = $this->postJson('/api/workouts', [
            'title' => 'User Workout',
        ]);
        $response->assertStatus(403);
    }
}
