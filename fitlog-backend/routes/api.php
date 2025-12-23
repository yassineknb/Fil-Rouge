<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // 1. Accessible to all authenticated users
    Route::get('/workouts', [App\Http\Controllers\WorkoutController::class, 'index']);
    Route::get('/workouts/{id}', [App\Http\Controllers\WorkoutController::class, 'show']);

    // 2. Protected by Permission: manage-workouts (AND ownership via Controller Policy)
    Route::middleware(['permission:manage-workouts'])->group(function () {
        Route::post('/workouts', [App\Http\Controllers\WorkoutController::class, 'store']);
        Route::put('/workouts/{id}', [App\Http\Controllers\WorkoutController::class, 'update']);
    });

    // 3. Protected by Role: admin
    Route::middleware(['role:admin'])->group(function () {
        Route::delete('/workouts/{id}', [App\Http\Controllers\WorkoutController::class, 'destroy']);
    });

    // 4. Exercise Management
    // Public read for authenticated users (Ownership check in Controller)
    Route::get('/workouts/{workoutId}/exercises', [App\Http\Controllers\ExerciseController::class, 'index']);

    // Protected by Permission: manage-exercises
    Route::middleware(['permission:manage-exercises'])->group(function () {
        Route::post('/workouts/{workoutId}/exercises', [App\Http\Controllers\ExerciseController::class, 'store']);
        Route::put('/exercises/{id}', [App\Http\Controllers\ExerciseController::class, 'update']);
        Route::delete('/exercises/{id}', [App\Http\Controllers\ExerciseController::class, 'destroy']);
    });
});
