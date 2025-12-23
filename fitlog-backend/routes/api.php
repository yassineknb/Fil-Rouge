<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);


    Route::get('/workouts', [App\Http\Controllers\WorkoutController::class, 'index']);
    Route::get('/workouts/{id}', [App\Http\Controllers\WorkoutController::class, 'show']);


    Route::middleware(['permission:manage-workouts'])->group(function () {
        Route::post('/workouts', [App\Http\Controllers\WorkoutController::class, 'store']);
        Route::put('/workouts/{id}', [App\Http\Controllers\WorkoutController::class, 'update']);
    });


    Route::middleware(['role:admin'])->group(function () {
        Route::delete('/workouts/{id}', [App\Http\Controllers\WorkoutController::class, 'destroy']);
    });

    Route::get('/workouts/{workoutId}/exercises', [App\Http\Controllers\ExerciseController::class, 'index']);


    Route::middleware(['permission:manage-exercises'])->group(function () {
        Route::post('/workouts/{workoutId}/exercises', [App\Http\Controllers\ExerciseController::class, 'store']);
        Route::put('/exercises/{id}', [App\Http\Controllers\ExerciseController::class, 'update']);
        Route::delete('/exercises/{id}', [App\Http\Controllers\ExerciseController::class, 'destroy']);
    });



    Route::get('/profile', [App\Http\Controllers\ProfileController::class, 'index']);
    Route::put('/profile', [App\Http\Controllers\ProfileController::class, 'update']);
    Route::get('/profile/stats', [App\Http\Controllers\ProfileController::class, 'stats']);
    Route::get('/profile/records', [App\Http\Controllers\ProfileController::class, 'records']);
});
