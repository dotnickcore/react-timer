import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const timersCxt = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={timersCxt.isRunning ? timersCxt.stopTimers : timersCxt.startTimers}>{timersCxt.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
