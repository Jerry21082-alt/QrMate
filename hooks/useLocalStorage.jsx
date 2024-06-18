import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const itemInLocalStorage =
    typeof window === "undefined" ? null : localStorage.getItem(key);

  const initialStoredValue = itemInLocalStorage
    ? JSON.parse(itemInLocalStorage)
    : defaultValue;

  const [value, setValue] = useState(initialStoredValue);

  useEffect(() => {
    if (value === "undefined") {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
