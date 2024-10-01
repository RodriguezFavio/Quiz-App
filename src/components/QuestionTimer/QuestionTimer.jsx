import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  return <ProgressBar timer={timeout} mode={mode} />;
}
