export const getFromStorage = (key: string) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
  };
  
export const setToStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, value);
    }
};