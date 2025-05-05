import { createContext, useContext, useReducer } from "react";
import { TimersContextValue } from "../types/TimersContextValue";
import { TimersContextProviderProps } from "../types/TimersContextProviderProps";
import { TimersState } from "../types/TimersState";
import { StartTimersAction } from "../types/StartTimersAction";
import { StopTimersAction } from "../types/StopTimersAction";
import { AddTimerAction } from "../types/AddTimerAction";

/*
    So the Context is a way to let values pass through the project without having to manually pass in props all over the place and the Provider essentially provides those values
*/

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCxt = useContext(TimersContext);

    if (timersCxt === null) {
        throw new Error('TimersContext is null - that should not be the case!');
    }

    return timersCxt;
}

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true
        }
    }

    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    }

    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }

    return state;
}

function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);
    
    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({type: 'ADD_TIMER', payload: timerData})
        },
        startTimers() {
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers() {
            dispatch({type: 'STOP_TIMERS'})
        },
    }

    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}

export default TimersContextProvider;