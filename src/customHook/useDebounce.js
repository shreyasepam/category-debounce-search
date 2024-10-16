import { useEffect, useRef } from 'react';

export const useDebounce = (callback, delay) => {
  const timerRef = useRef(null);
  
  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return (props) => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      callback(props);
    }, delay);
  };
};
