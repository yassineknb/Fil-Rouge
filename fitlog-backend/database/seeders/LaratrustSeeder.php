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
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('Truncating User, Role and Permission tables');
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
            // Create a new role
            $role = Role::firstOrCreate(
                ['name' => $key],
                [
                    'display_name' => ucwords(str_replace('_', ' ', $key)),
                    'description' => ucwords(str_replace('_', ' ', $key))
                ]
            );

            $permissions = [];

            $this->command->info('Creating Role ' . strtoupper($key));

            // Reading role permission modules
            foreach ($modules as $module => $moduleDisplayName) {
                // Create a catch-all permission for the module? No, specific permissions per earlier brief
                // The brief asked for 'manage-workouts' and 'manage-exercises'.
                // The structure here assumes array values are descriptions.

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

            // Attach all permissions to the role
            $role->permissions()->sync($permissions);

            if ($key == 'admin') {
                $this->command->info("Creating 'admin' user");
                $user = User::firstOrCreate(
                    ['email' => 'admin@fitlog.com'],
                    [
                        'name' => 'Admin User',
                        'password' => bcrypt('password'), // Hardcoded for demo/seed
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

        // Truncate config roles can potentially remove data if not careful.
        // For idempotent seeder in production, usually we rely on firstOrCreate and sync.
        // Truncating might be too aggressive if existing data is precious.
        // However, user setup requested "propres et idempotent", "sans duplication".
        // Truncating pivot tables is safe. Truncating definition tables (roles, permissions) is safe only if we re-create everything needed.
        // I will choose to NOT truncate Users, but I WILL truncate pivot tables to ensure clean slate for assignments,
        // and I will use firstOrCreate for Roles/Permissions to be safe.

        DB::table('permission_role')->truncate();
        DB::table('permission_user')->truncate();
        DB::table('role_user')->truncate();

        // Commenting out full truncation of roles/permissions to be safer for existing data, 
        // relying on firstOrCreate above.
        // DB::table('roles')->truncate();
        // DB::table('permissions')->truncate();

        Schema::enableForeignKeyConstraints();
    }
}
