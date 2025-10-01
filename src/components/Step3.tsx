'use client';
import type { ProjectDetails } from './Step1';
import type { RoomType, RoomSize } from './Step2';
import { useState } from 'react';

export default function Step3({
  details,
  room,
  onBack,
}: {
  details: ProjectDetails;
  room: { type: RoomType; size?: RoomSize } | undefined;
  onBack: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    setLoading(true);
    setError(null);
    const payload = { ...details, room };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // optional: fall back to console.log if non-2xx
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data = await res.json();
      // eslint-disable-next-line no-console
      console.log('Mock API response:', data);
      alert('Submitted! Check the console for the mock API response.');
    } catch (e: any) {
      setError(e?.message ?? 'Submit failed');
      // eslint-disable-next-line no-console
      console.error(e);
      alert('Submission failed (see console).');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-1">Review & submit</h2>
      <p className="text-sm text-gray-400 mb-6">Confirm everything looks good.</p>

      <div className="space-y-6">
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
          <h3 className="text-lg font-semibold mb-2">Summary</h3>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="text-gray-400">Project name</dt>
              <dd className="font-medium">{details.name || '—'}</dd>
            </div>
            <div>
              <dt className="text-gray-400">Description</dt>
              <dd className="font-medium whitespace-pre-wrap">{details.description || '—'}</dd>
            </div>
            <div>
              <dt className="text-gray-400">Room type</dt>
              <dd className="font-medium">{room?.type || '—'}</dd>
            </div>
            {room?.size && (
              <div>
                <dt className="text-gray-400">Room size</dt>
                <dd className="font-medium">{room.size}</dd>
              </div>
            )}
          </dl>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-gray-800 px-4 py-2 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            disabled={loading}
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-lg bg-white text-black px-4 py-2 font-medium hover:opacity-90 disabled:opacity-50
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition"
          >
            {loading ? 'Submitting…' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
