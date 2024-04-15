import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(id);
  }, [delay]);
};
