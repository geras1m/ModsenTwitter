import { useEffect, useState } from 'react';

type UseDebounceType = (value: string, delay?: number) => string;

export const useDebounce: UseDebounceType = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(timeoutId);
    };
  }, [value]);

  return debouncedValue;
};
