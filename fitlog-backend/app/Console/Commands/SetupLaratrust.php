<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Role;
use App\Models\Permission;
use App\Models\User;

class SetupLaratrust extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'laratrust:setup-check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup, verify and assign Laratrust roles and permissions';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting Laratrust Setup...');

        // 1. Verify User model uses trait (We do this check manually or rely on PHP to not crash, 
        // using method_exists check would be safer if we are unsure)
        if (!method_exists(User::class, 'hasRole')) {
            $this->error('User model does not appear to use LaratrustUserTrait (hasRole method missing).');
            return 1;
        }
        $this->info('User model seems to have Laratrust trait methods.');

        // 2. Create Roles
        $adminRole = Role::firstOrCreate(
            ['name' => 'admin'],
            ['display_name' => 'Administrator', 'description' => 'User is allowed to manage and edit other users']
        );
        $this->info('Role verified/created: admin');

        $userRole = Role::firstOrCreate(
            ['name' => 'user'],
            ['display_name' => 'User', 'description' => 'General user']
        );
        $this->info('Role verified/created: user');

        // 3. Create Permissions
        $manageWorkouts = Permission::firstOrCreate(
            ['name' => 'manage-workouts'],
            ['display_name' => 'Manage Workouts', 'description' => 'Manage workouts']
        );
        $this->info('Permission verified/created: manage-workouts');

        $manageExercises = Permission::firstOrCreate(
            ['name' => 'manage-exercises'],
            ['display_name' => 'Manage Exercises', 'description' => 'Manage exercises']
        );
        $this->info('Permission verified/created: manage-exercises');

        // 4. Assign Permissions to Roles
        // Admin: all permissions
        $allPermissions = [$manageWorkouts, $manageExercises];
        $adminRole->syncPermissions($allPermissions);
        $this->info('Assigned all permissions to admin role.');

        // User: only manage-exercises
        $userRole->syncPermissions([$manageExercises]);
        $this->info('Assigned manage-exercises permission to user role.');

        // 5. Create/Find User and Assign Role
        $user = User::first();
        if (!$user) {
            $this->info('No user found. Creating test user...');
            $user = User::factory()->create([
                'name' => 'Test Admin',
                'email' => 'admin@fitlog.com',
                'password' => bcrypt('password'), // You might want to ask user for password or set default
            ]);
            $this->info('Created user: admin@fitlog.com');
        } else {
            $this->info("Using existing user: {$user->email} (ID: {$user->id})");
        }

        if (!$user->hasRole('admin')) {
            $user->addRole($adminRole);
            $this->info("Attached 'admin' role to user {$user->email}.");
        } else {
            $this->info("User {$user->email} already has 'admin' role.");
        }

        // Verify relationship
        if ($user->hasRole('admin') && $user->hasPermission('manage-workouts')) {
            $this->info('Verification SUCCESS: User has admin role and inherits manage-workouts permission.');
        } else {
            $this->error('Verification FAILED: User roles/permissions mismatch.');
        }

        return 0;
    }
}
