import { useCallback, useEffect, useState } from "react";
import useEventCallback from "./useEventCallback";
import useEventListener from "./useEventListener";
import { LocalStorageKey } from "../constants";

// Helper function to parse JSON safely
const readValueFromLocalStorage = (key, initialValue) => {
  if (typeof window === "undefined") {
    return initialValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.warn(`Error reading localStorage key “${key}”:`, error);
    return initialValue;
  }
};

function useLocalStorage(key, initialValue) {
  // Get value from local storage or return initialValue
  const readValue = useCallback(() => readValueFromLocalStorage(key, initialValue), [initialValue, key]);

  // State to store our value
  const [storedValue, setStoredValue] = useState(readValue);

  // Function to set value and persist to local storage
  const setValue = useEventCallback((value) => {
    if (typeof window === "undefined") {
      console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
      return;
    }

    try {
      const newValue = typeof value === "function" ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });

  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  const handleStorageChange = useCallback((event) => {
    if (event.key && event.key !== key) {
      return;
    }
    setStoredValue(readValue());
  }, [key, readValue]);

  // Listen for storage changes in other documents
  useEventListener("storage", handleStorageChange);

  // Listen for custom local-storage events
  useEventListener("local-storage", handleStorageChange);

  return [storedValue, setValue];
}

export default useLocalStorage;
