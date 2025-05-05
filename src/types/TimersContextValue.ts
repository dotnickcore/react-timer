import { Timer } from "./Timer";
import { TimersState } from "./TimersState";

export type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
}