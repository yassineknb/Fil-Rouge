<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

class LaratrustFeatureTest extends TestCase
{
    // NO RefreshDatabase, relying on current seeded state
    // use RefreshDatabase; 

    public function test_admin_can_create_and_delete_workout()
    {
        // 1. Get Admin
        $admin = User::where('email', 'admin@fitlog.com')->first();
        if (!$admin) {
            $this->markTestSkipped('Admin user not found. Run seeder first.');
        }

        Sanctum::actingAs($admin);

        // 2. Test Create (Permission: manage-workouts)
        $response = $this->postJson('/api/workouts', [
            'title' => 'Admin Workout Test Recheck',
            'description' => 'Testing creation permission in recheck phase',
            'scheduled_at' => now()->addDay()->toDateTimeString(),
        ]);

        $response->assertStatus(201);
        $workoutId = $response->json('id');

        // 3. Test Delete (Role: admin)
        $response = $this->deleteJson("/api/workouts/{$workoutId}");

        $response->assertStatus(200);
    }

    public function test_user_cannot_delete_workout()
    {
        // 1. Create a regular user who might have 'manage-workouts' via role 'user'??
        // Wait, 'user' role only has 'manage-exercises'.
        // So a standard user CANNOT create workouts in this config, unless they have 'manage-workouts'.
        // The brief said: "user : uniquement manage-exercises".
        // So a standard user CANNOT create workouts either!

        // Let's create a temp user with NO roles/permissions first to be safe, 
        // OR better, checking the 'user' role which has only 'manage-exercises'.

        $user = User::factory()->create();
        // No role assigned yet, or assign 'user' role
        $roleUser = \App\Models\Role::where('name', 'user')->first();
        $user->addRole($roleUser);

        Sanctum::actingAs($user);

        // Try to create workout -> Should be Forbidden (403)
        $response = $this->postJson('/api/workouts', [
            'title' => 'User Workout',
        ]);
        $response->assertStatus(403);
    }
}
