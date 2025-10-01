'use client';
import { useState } from 'react';

export type ProjectDetails = { name: string; description: string };

export default function Step1({ onNext }: { onNext: (d: ProjectDetails) => void }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [errors, setErrors] = useState<{ name?: string; description?: string }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = 'Project name is required';
    if (!desc.trim()) nextErrors.description = 'Project description is required';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      onNext({ name: name.trim(), description: desc.trim() });
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-1">Project details</h2>
      <p className="text-sm text-gray-400 mb-6">Tell us about your interior project.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="project-name" className="block text-sm mb-1 text-gray-300">
            Project name
          </label>
          <input
            id="project-name"
            className={`w-full rounded-lg bg-gray-900 border px-3 py-2 outline-none
              ${errors.name ? 'border-red-500' : 'border-gray-800'} focus:ring-2 focus:ring-gray-600 transition`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Living room refresh"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'project-name-error' : undefined}
          />
          {errors.name && (
            <p id="project-name-error" className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="project-desc" className="block text-sm mb-1 text-gray-300">
            Project description
          </label>
          <textarea
            id="project-desc"
            rows={5}
            className={`w-full rounded-lg bg-gray-900 border px-3 py-2 outline-none
              ${errors.description ? 'border-red-500' : 'border-gray-800'} focus:ring-2 focus:ring-gray-600 transition`}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Short description…"
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? 'project-desc-error' : undefined}
          />
          {errors.description && (
            <p id="project-desc-error" className="text-red-400 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-white text-black px-4 py-2 font-medium hover:opacity-90
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
