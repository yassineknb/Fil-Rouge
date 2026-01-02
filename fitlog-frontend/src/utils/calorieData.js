// Base kcal per set by category
export const BASE_CALORIES = {
    'Musculation': 4, // Not used in new formula but kept for fallback
    'HIIT': 8,
    'Cardio': 6,
    'Stretching': 1.5
};

export const RPE_FACTORS = {
    4: 0.7,
    5: 0.75,
    6: 0.8,
    7: 0.9,
    8: 1.0,
    9: 1.15,
    10: 1.3
};

export const CALORIE_REFERENCES = [
    // MUSCULATION - COMPOUND (Factor 1.2)
    { name: 'Squat', category: 'Musculation', isCompound: true },
    { name: 'Front Squat', category: 'Musculation', isCompound: true },
    { name: 'Deadlift', category: 'Musculation', isCompound: true },
    { name: 'Romanian Deadlift', category: 'Musculation', isCompound: true },
    { name: 'Bench Press', category: 'Musculation', isCompound: true },
    { name: 'Incline Bench Press', category: 'Musculation', isCompound: true },
    { name: 'Overhead Press', category: 'Musculation', isCompound: true },
    { name: 'Pull-Ups', category: 'Musculation', isCompound: true },
    { name: 'Barbell Row', category: 'Musculation', isCompound: true },
    { name: 'Dumbbell Row', category: 'Musculation', isCompound: true },
    { name: 'Lunges', category: 'Musculation', isCompound: true },
    { name: 'Hip Thrust', category: 'Musculation', isCompound: true },

    // MUSCULATION - ISOLATION (Factor 1.0)
    { name: 'Biceps Curl', category: 'Musculation', isCompound: false },
    { name: 'Hammer Curl', category: 'Musculation', isCompound: false },
    { name: 'Triceps Pushdown', category: 'Musculation', isCompound: false },
    { name: 'Skull Crushers', category: 'Musculation', isCompound: false },
    { name: 'Lateral Raises', category: 'Musculation', isCompound: false },
    { name: 'Front Raises', category: 'Musculation', isCompound: false },
    { name: 'Rear Delt Fly', category: 'Musculation', isCompound: false },
    { name: 'Leg Extension', category: 'Musculation', isCompound: false },
    { name: 'Leg Curl', category: 'Musculation', isCompound: false },
    { name: 'Calf Raises', category: 'Musculation', isCompound: false },
    { name: 'Crunches', category: 'Musculation', isCompound: false },
    { name: 'Hanging Leg Raises', category: 'Musculation', isCompound: false },
    { name: 'Plank', category: 'Musculation', isCompound: false },

    // HIIT
    { name: 'Burpees', category: 'HIIT' },
    { name: 'Jump Squats', category: 'HIIT' },
    { name: 'Jump Lunges', category: 'HIIT' },
    { name: 'Mountain Climbers', category: 'HIIT' },
    { name: 'High Knees', category: 'HIIT' },
    { name: 'Box Jumps', category: 'HIIT' },
    { name: 'Kettlebell Swings', category: 'HIIT' },
    { name: 'Battle Ropes', category: 'HIIT' },
    { name: 'Thrusters', category: 'HIIT' },
    { name: 'Wall Balls', category: 'HIIT' },
    { name: 'Med Ball Slams', category: 'HIIT' },
    { name: 'Sprints', category: 'HIIT' },

    // CARDIO
    { name: 'Running', category: 'Cardio' },
    { name: 'Cycling', category: 'Cardio' },
    { name: 'Rowing Machine', category: 'Cardio' },
    { name: 'Elliptical', category: 'Cardio' },
    { name: 'Stair Climber', category: 'Cardio' },
    { name: 'Jump Rope', category: 'Cardio' },
    { name: 'Swimming', category: 'Cardio' },
    { name: 'Ski Erg', category: 'Cardio' },
    { name: 'Marche rapide', category: 'Cardio' },
    { name: 'Course modérée', category: 'Cardio' },

    // STRETCHING
    { name: 'Hamstring Stretch', category: 'Stretching' },
    { name: 'Quad Stretch', category: 'Stretching' },
    { name: 'Hip Flexor Stretch', category: 'Stretching' },
    { name: 'Calf Stretch', category: 'Stretching' },
    { name: 'Chest Stretch', category: 'Stretching' },
    { name: 'Shoulder Mobility', category: 'Stretching' },
    { name: 'Thoracic Mobility', category: 'Stretching' },
    { name: 'Yoga Flow', category: 'Stretching' },
    { name: 'Static Stretching', category: 'Stretching' },
    { name: 'Foam Rolling', category: 'Stretching' },
];

export const calculateExerciseCalories = (exerciseName, sets) => {
    if (!exerciseName || !sets || sets.length === 0) return 0;

    const ref = CALORIE_REFERENCES.find(ex => ex.name.toLowerCase() === exerciseName.toLowerCase());
    const category = ref ? ref.category : 'Musculation'; 
    
    let total = 0;

    // ----- MUSCULATION LOGIC (Volume Based) -----
    // Formula: (Volume / 1000) * 35 * RPE Factor
    if (category === 'Musculation') {
        sets.forEach(set => {
            const weight = parseFloat(set.weight) || 0;
            const reps = parseInt(set.reps) || 0;
            let rpe = parseFloat(set.rpe);

            if (isNaN(rpe) || rpe < 4) rpe = 4;
            if (rpe > 10) rpe = 10;

            const rpeFactor = RPE_FACTORS[Math.round(rpe)] || 0.8;
            
            // Volume = Reps * Weight
            const volume = reps * weight;
            
            if (volume > 0) {
                total += (volume / 1000) * 35 * rpeFactor;
            }
        });

    } 
    // ----- HIIT LOGIC (Rep Based) -----
    // Formula: 1.5 * Total Reps * RPE Factor
    else if (category === 'HIIT') {
        const base = 1.5;

        sets.forEach(set => {
            let rpe = parseFloat(set.rpe);
            if (isNaN(rpe) || rpe < 4) rpe = 4;
            if (rpe > 10) rpe = 10;
            const rpeFactor = RPE_FACTORS[Math.round(rpe)] || 0.8;

            const reps = parseInt(set.reps) || 0; 
            
            total += base * reps * rpeFactor;
        });

    }
    // ----- CARDIO LOGIC (Block Based) -----
    // Formula: 80 * Blocs * RPE Factor (1 block = 10 min)
    else if (category === 'Cardio') {
        const base = 80;

        sets.forEach(set => {
            let rpe = parseFloat(set.rpe);
            if (isNaN(rpe) || rpe < 4) rpe = 4;
            if (rpe > 10) rpe = 10;
            const rpeFactor = RPE_FACTORS[Math.round(rpe)] || 0.8;

            const blocks = parseFloat(set.reps) || 0; 
            
            total += base * blocks * rpeFactor;
        });

    }
    // ----- STRETCHING LOGIC (Block Based) -----
    // Formula: 15 * Blocs * RPE Factor (1 block = 10 min)
    else if (category === 'Stretching') {
        const base = 15;

        sets.forEach(set => {
            let rpe = parseFloat(set.rpe);
            if (isNaN(rpe) || rpe < 4) rpe = 4;
            if (rpe > 10) rpe = 10;
            const rpeFactor = RPE_FACTORS[Math.round(rpe)] || 0.7;

            const blocks = parseFloat(set.reps) || 0;

            total += base * blocks * rpeFactor;
        });
    }

    return Math.round(total);
};

// Deprecated
export const findCalorieEstimate = (name) => 0;
