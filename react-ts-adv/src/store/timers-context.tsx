import { type ReactNode, createContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

// to be only for this module?
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

// to be shared
type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimerContextProviderProps = { children: ReactNode };

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    addTimer() {
      console.log("pending");
    },
    startTimers() {
      console.log("pending");
    },
    stopTimers() {
      console.log("pending");
    },
    isRunning: false,
    timers: [],
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
