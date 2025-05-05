import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../types/Timer.ts'
import { useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration);
  
  setInterval(function() {
    setRemainingTime(prevTime => prevTime - 50);
  }, 50);
  
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime}/></p>
      <p>{}</p>
    </Container>
  );
}
