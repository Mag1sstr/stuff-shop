import { useEffect, useState } from "react";

export function useDebouce(value: string) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, 1500);
    return () => clearTimeout(timer);
  }, [value]);

  return debounceValue;
}
