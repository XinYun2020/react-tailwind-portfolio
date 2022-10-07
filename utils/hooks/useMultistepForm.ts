import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i; // already on the last step/page
      return i + 1; // otherwise increment by 1
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i; // already on the last step/page
      return i - 1; // otherwise decrease by 1
    });
  }
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps, // hook automatically return the steps we passed in
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
