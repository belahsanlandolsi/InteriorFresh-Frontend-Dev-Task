'use client';
import { useState } from 'react';

export type RoomType = 'Living Room' | 'Bedroom' | 'Kitchen' | 'Office';
export type RoomSize = 'Small' | 'Medium' | 'Large';

const ROOMS: { label: RoomType; img: string }[] = [
  { label: 'Living Room', img: '/images/living.jpg' },
  { label: 'Bedroom',     img: '/images/bedroom.jpg' },
  { label: 'Kitchen',     img: '/images/kitchen.jpg' },
  { label: 'Office',      img: '/images/office.jpg' },
];

export default function Step2({
  initialType,
  initialSize,
  onBack,
  onNext,
}: {
  initialType?: RoomType;
  initialSize?: RoomSize;
  onBack: () => void;
  onNext: (room: { type: RoomType; size?: RoomSize }) => void;
}) {
  const [selected, setSelected] = useState<RoomType | undefined>(initialType);
  const [size, setSize] = useState<RoomSize | undefined>(initialSize);

  function handleContinue() {
    if (!selected) return;
    onNext({ type: selected, size }); // size optional
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-1">Pick a room</h2>
      <p className="text-sm text-gray-400 mb-6">Choose the room you want to design.</p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ROOMS.map((r) => (
            <button
              key={r.label}
              type="button"
              onClick={() => setSelected(r.label)}
              className={`rounded-xl overflow-hidden border text-left transition
                ${selected === r.label ? 'border-white' : 'border-gray-800 hover:border-gray-600'}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.img} alt={r.label} className="w-full aspect-video object-cover" />
              <div className="p-3">
                <p className="font-medium">{r.label}</p>
                {selected === r.label && <p className="text-xs text-gray-400 mt-1">Selected</p>}
              </div>
            </button>
          ))}
        </div>

        {/* Optional size selector */}
        <div>
          <label className="block text-sm mb-2 text-gray-300">Room size (optional)</label>
          <div className="flex flex-wrap items-center gap-2">
            {(['Small', 'Medium', 'Large'] as RoomSize[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`px-3 py-1.5 rounded-lg border transition
                  ${size === s ? 'border-white' : 'border-gray-800 hover:border-gray-600'}`}
              >
                {s}
              </button>
            ))}
            {size && (
              <button
                type="button"
                onClick={() => setSize(undefined)}
                className="px-3 py-1.5 rounded-lg border border-gray-800"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-gray-800 px-4 py-2 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          >
            Back
          </button>
          <button
            type="button"
            disabled={!selected}
            onClick={handleContinue}
            className="rounded-lg bg-white text-black px-4 py-2 font-medium disabled:opacity-50 hover:opacity-90
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
