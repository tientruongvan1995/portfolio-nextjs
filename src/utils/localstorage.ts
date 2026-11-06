const setLocalStorage = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
};

const getLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch {
    return initialValue;
  }
};

export { setLocalStorage, getLocalStorage };
