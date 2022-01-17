import { useRef } from 'react';

export const useDebounced = (func: any, delay = 500) => {
  const timeoutRef = useRef<number>();
  
  return (...args: any) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => func(...args), delay);
  };
};
