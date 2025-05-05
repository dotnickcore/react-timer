import { createContext } from "react";
import { TimersContextValue } from "../types/TimersContextValue";
import { TimersContextProviderProps } from "../types/TimersContextProviderProps";

const TimersContext = createContext<TimersContextValue | null>(null);

function TimersContextProvider({ children }: TimersContextProviderProps) {
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timerData) {

        },
        startTimers() {
    
        },
        stopTimers() {
    
        },
    }

    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}

export default TimersContextProvider;