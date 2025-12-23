<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\Sanctum;

class ProfileFeatureTest extends TestCase
{
    public function test_user_can_view_own_profile()
    {
        $user = User::factory()->create([
            'name' => 'John Profile',
            'birth_date' => '1990-01-01',
            'current_weight' => 80.5,
        ]);

        Sanctum::actingAs($user);

        $response = $this->getJson('/api/profile');

        $response->assertStatus(200)
            ->assertJson([
                'id' => $user->id,
                'name' => 'John Profile',
                'birth_date' => '1990-01-01',
                'current_weight' => 80.5,
            ])
            ->assertJsonStructure(['roles', 'permissions']);
    }

    public function test_user_can_update_profile()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->putJson('/api/profile', [
            'name' => 'John Updated',
            'birth_date' => '1995-05-05',
            'current_weight' => 75.0,

        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'name' => 'John Updated',
            'birth_date' => '1995-05-05',
            'current_weight' => 75.0,
            'email' => $user->email,
        ]);
    }

    public function test_profile_stats_calculation()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);


        Workout::factory()->count(2)->create([
            'user_id' => $user->id,
            'scheduled_at' => now()
        ]);


        Workout::factory()->create([
            'user_id' => $user->id,
            'scheduled_at' => now()->subMonth()
        ]);

        $response = $this->getJson('/api/profile/stats');

        $response->assertStatus(200)
            ->assertJson([
                'workouts_this_week' => 2,
                'total_workouts' => 3,
            ]);
    }

    public function test_profile_records_calculation()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $w1 = Workout::factory()->create(['user_id' => $user->id]);


        $w1->exercises()->create(['name' => 'Bench Press', 'weight' => 100, 'sets' => 1, 'reps' => 1]);

        $w2 = Workout::factory()->create(['user_id' => $user->id]);


        $w2->exercises()->create(['name' => 'Bench Press', 'weight' => 120, 'sets' => 1, 'reps' => 1]);


        $w2->exercises()->create(['name' => 'Squat', 'weight' => 150, 'sets' => 1, 'reps' => 1]);

        $response = $this->getJson('/api/profile/records');

        $response->assertStatus(200);


        $data = $response->json();


        $this->assertEquals(120, collect($data)->firstWhere('name', 'Bench Press')['max_value']);
        $this->assertEquals(150, collect($data)->firstWhere('name', 'Squat')['max_value']);
    }

    public function test_cannot_access_other_users_stats_implicitly()
    {


        $user1 = User::factory()->create(['name' => 'User One']);
        $user2 = User::factory()->create(['name' => 'User Two']);

        Sanctum::actingAs($user1);

        $response = $this->getJson('/api/profile');
        $response->assertJson(['name' => 'User One']);
        $response->assertJsonMissing(['name' => 'User Two']);
    }
}
