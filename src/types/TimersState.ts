import { Timer } from "./Timer";

export type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}