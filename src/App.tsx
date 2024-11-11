import React, { useState } from 'react';
import { PlusCircle, Dumbbell, Flame } from 'lucide-react';
import { Exercise, ExerciseEntry } from './types';
import ExerciseForm from './components/ExerciseForm';
import ExerciseList from './components/ExerciseList';
import TotalCalories from './components/TotalCalories';

function App() {
  const [exercises, setExercises] = useState<ExerciseEntry[]>([]);

  const handleAddExercise = (exercise: Exercise) => {
    const calories = calculateCalories(exercise);
    setExercises([...exercises, { ...exercise, calories, id: Date.now() }]);
  };

  const calculateCalories = (exercise: Exercise): number => {
    // MET values for different exercises
    const metValues: { [key: string]: number } = {
      running: 8.0,
      cycling: 7.5,
      swimming: 6.0,
      walking: 3.5,
      yoga: 2.5,
    };

    // Formula: Calories = MET × Weight (kg) × Duration (hours)
    const met = metValues[exercise.type];
    const durationInHours = exercise.duration / 60;
    return Math.round(met * exercise.weight * durationInHours);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Dumbbell className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Calculadora de Calorías</h1>
          </div>
          <p className="text-gray-600">Registra tus ejercicios y calcula las calorías quemadas</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <PlusCircle className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800">Agregar Ejercicio</h2>
          </div>
          <ExerciseForm onSubmit={handleAddExercise} />
        </div>

        <div className="space-y-6">
          <ExerciseList exercises={exercises} />
          <TotalCalories exercises={exercises} />
        </div>
      </div>
    </div>
  );
}

export default App;