import { Timer } from "./Timer"

export type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer
}