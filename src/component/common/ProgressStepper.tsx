import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
  totalSteps: number;
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({
  steps,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      {/* Step indicator text */}
      <div className="flex justify-end mb-4">
        <span className="text-sm text-gray-500">
          Bước {currentStep}/{totalSteps}
        </span>
      </div>

      {/* Progress stepper */}
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${
                    step.isActive
                      ? 'bg-orange-500 text-white border-2 border-orange-500'
                      : step.isCompleted
                      ? 'bg-orange-300 text-white border-2 border-orange-300'
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                  }
                `}
              >
                {step.isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`
                  mt-2 text-sm font-medium
                  ${
                    step.isActive
                      ? 'text-orange-600'
                      : step.isCompleted
                      ? 'text-orange-400'
                      : 'text-gray-400'
                  }
                `}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`
                  w-16 h-0.5 mx-4 mt-[-20px]
                  ${
                    steps[index + 1].isCompleted || steps[index + 1].isActive
                      ? 'bg-orange-500'
                      : 'bg-gray-200'
                  }
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};