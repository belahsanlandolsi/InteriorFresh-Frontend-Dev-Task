'use client';
type Props = { step: number; total: number };
export default function Stepper({ step, total }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: total }).map((_, i) => {
        const current = i + 1;
        const isActive = current === step;
        const isDone = current < step;
        return (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`h-8 w-8 rounded-full grid place-items-center text-sm
                ${isActive ? 'bg-white text-black'
                : isDone ? 'bg-gray-300 text-black'
                : 'bg-gray-800 text-gray-300'}`}
              aria-current={isActive ? 'step' : undefined}
            >
              {current}
            </div>
            {current < total && <div className="w-10 h-[2px] bg-gray-800" />}
          </div>
        );
      })}
    </div>
  );
}
