import { useCallback } from "react";

export const useLocalStorage = <T>(name: string) => {
  const setItem = useCallback((item: T) => {
    try {
      localStorage.setItem(name, JSON.stringify(item));
      return item;
    } catch (error) {
      console.log(error);
    }
  },[name]);

  const getItem = useCallback(() => {
    try {
      const str = localStorage.getItem(name);
      try {
        const data = JSON.parse(str ?? "");
        return data as T;
      } catch (error) {
        return str;
      }
    } catch (error) {
      console.log(error);
    }
  },[name]);
  return { setItem, getItem };
};
