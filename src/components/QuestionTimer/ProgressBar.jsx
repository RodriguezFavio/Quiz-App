import { useEffect, useState } from 'react';

export default function ProgressBar({ timer, mode }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} className={mode} />;
}
