import React from 'react';
import { ExerciseEntry } from '../types';
import { Flame } from 'lucide-react';

interface TotalCaloriesProps {
  exercises: ExerciseEntry[];
}

const TotalCalories: React.FC<TotalCaloriesProps> = ({ exercises }) => {
  const totalCalories = exercises.reduce((sum, exercise) => sum + exercise.calories, 0);

  return (
    <div className="bg-indigo-600 rounded-xl shadow-lg p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Total Calorías Quemadas</h2>
          <p className="text-indigo-200">De todos los ejercicios</p>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="w-8 h-8" />
          <span className="text-3xl font-bold">{totalCalories}</span>
          <span className="text-xl">kcal</span>
        </div>
      </div>
    </div>
  );
};

export default TotalCalories;