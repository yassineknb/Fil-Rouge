<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\Role;
use App\Models\Permission;
use App\Models\User;

class LaratrustSeeder extends Seeder
{

    public function run()
    {

        $this->truncateLaratrustTables();

        $config = [
            'admin' => [
                'manage-workouts' => 'Manage Workouts',
                'manage-exercises' => 'Manage Exercises',
            ],
            'user' => [
                'manage-exercises' => 'Manage Exercises',
            ],
        ];

        foreach ($config as $key => $modules) {
            $role = Role::firstOrCreate(
                [
                    'display_name' => ucwords(str_replace('_', ' ', $key)),
                    'description' => ucwords(str_replace('_', ' ', $key))
                ]
            );

            $permissions = [];

            $this->command->info('Creating Role ' . strtoupper($key));

            foreach ($modules as $module => $moduleDisplayName) {

                $permissionValue = $module;

                $permission = Permission::firstOrCreate(
                    ['name' => $permissionValue],
                    [
                        'display_name' => $moduleDisplayName,
                        'description' => $moduleDisplayName,
                    ]
                );

                $permissions[] = $permission->id;
            }

            $role->permissions()->sync($permissions);

            if ($key == 'admin') {
                $user = User::firstOrCreate(
                    ['email' => 'admin@fitlog.com'],
                    [
                        'name' => 'Admin User',
                        'password' => bcrypt('password'),
                    ]
                );

                if (!$user->hasRole('admin')) {
                    $user->addRole($role);
                }
            }
        }
    }

    public function truncateLaratrustTables()
    {
        Schema::disableForeignKeyConstraints();

        DB::table('role_user')->truncate();

        Schema::enableForeignKeyConstraints();
    }
}
