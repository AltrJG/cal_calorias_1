import React from 'react';
import { ExerciseEntry } from '../types';
import { Timer, Weight, Flame } from 'lucide-react';

interface ExerciseListProps {
  exercises: ExerciseEntry[];
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
  const getExerciseName = (type: string): string => {
    const names: { [key: string]: string } = {
      running: 'Correr',
      cycling: 'Ciclismo',
      swimming: 'Natación',
      walking: 'Caminar',
      yoga: 'Yoga',
    };
    return names[type] || type;
  };

  if (exercises.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay ejercicios registrados aún
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Ejercicios Registrados</h2>
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">
                {getExerciseName(exercise.type)}
              </h3>
              <div className="flex items-center gap-2 text-indigo-600">
                <Flame className="w-5 h-5" />
                <span className="font-semibold">{exercise.calories} kcal</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Timer className="w-4 h-4" />
                <span>{exercise.duration} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Weight className="w-4 h-4" />
                <span>{exercise.weight} kg</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;