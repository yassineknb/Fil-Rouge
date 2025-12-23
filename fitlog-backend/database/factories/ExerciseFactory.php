<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Exercise>
 */
class ExerciseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'sets' => $this->faker->numberBetween(1, 5),
            'reps' => $this->faker->numberBetween(1, 20),
            'weight' => $this->faker->randomFloat(2, 5, 200),
            'notes' => $this->faker->sentence(),
            'workout_id' => \App\Models\Workout::factory(),
        ];
    }
}
