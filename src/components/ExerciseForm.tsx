import React, { useState } from 'react';
import { Exercise } from '../types';

interface ExerciseFormProps {
  onSubmit: (exercise: Exercise) => void;
}

const ExerciseForm: React.FC<ExerciseFormProps> = ({ onSubmit }) => {
  const [exercise, setExercise] = useState<Exercise>({
    type: 'running',
    duration: 30,
    weight: 70,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(exercise);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Ejercicio
          </label>
          <select
            value={exercise.type}
            onChange={(e) => setExercise({ ...exercise, type: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="running">Correr</option>
            <option value="cycling">Ciclismo</option>
            <option value="swimming">Natación</option>
            <option value="walking">Caminar</option>
            <option value="yoga">Yoga</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duración (minutos)
          </label>
          <input
            type="number"
            min="1"
            value={exercise.duration}
            onChange={(e) => setExercise({ ...exercise, duration: Number(e.target.value) })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Peso (kg)
          </label>
          <input
            type="number"
            min="1"
            value={exercise.weight}
            onChange={(e) => setExercise({ ...exercise, weight: Number(e.target.value) })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2"
      >
        Agregar Ejercicio
      </button>
    </form>
  );
};

export default ExerciseForm;