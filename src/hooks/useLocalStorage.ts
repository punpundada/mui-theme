import { useCallback, useMemo } from "react";

export const useLocalStorage = <T>(name: string,def?:T) => {

  try {
    if(def){
      localStorage.setItem(name,JSON.stringify(def))
    }
  } catch (error) {
    console.error(error)
  }

  const setItem = useCallback((item: T) => {
    try {
      localStorage.setItem(name, JSON.stringify(item));
      return item;
    } catch (error) {
      console.log(error);
      return null
    }
  },[name]);

  const getItem = useCallback(() => {
    try {
      const str = localStorage.getItem(name);
      try {
        const data = JSON.parse(str ?? "");
        return data as T | null;
      } catch (error) {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null
    }
  },[name]);
  return useMemo(()=>({ setItem, getItem }),[getItem, setItem]);
};
