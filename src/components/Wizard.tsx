'use client';
import { useState } from 'react';
import Stepper from './Stepper';
import Step1, { type ProjectDetails } from './Step1';
import Step2, { type RoomType, type RoomSize } from './Step2';
import Step3 from './Step3';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<ProjectDetails>({ name: '', description: '' });
  const [room, setRoom] = useState<{ type: RoomType; size?: RoomSize } | undefined>(undefined);

  const total = 3;

  return (
    <div>
      <Stepper step={step} total={total} />
      <div className="rounded-2xl border border-gray-800 bg-black p-6">
        {step === 1 && (
          <Step1 onNext={(d) => { setDetails(d); setStep(2); }} />
        )}
        {step === 2 && (
          <Step2
            initialType={room?.type}
            initialSize={room?.size}
            onBack={() => setStep(1)}
            onNext={(r) => { setRoom(r); setStep(3); }}
          />
        )}
        {step === 3 && (
          <Step3 details={details} room={room} onBack={() => setStep(2)} />
        )}
      </div>
    </div>
  );
}
