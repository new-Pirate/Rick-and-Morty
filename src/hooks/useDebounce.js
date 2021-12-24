import { useRef } from 'react';

export const useDebounced = (func, delay = 500) => {
  const timeoutRef = useRef();

  return (...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => func(...args), delay);
  };
};
