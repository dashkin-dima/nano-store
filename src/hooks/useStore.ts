import { useEffect, useState } from "react";
import { TCreateStore, TUseStoreValue } from "../types";

export const useStore = <T>(
  store: ReturnType<TCreateStore<T>>
): TUseStoreValue<T> => {
  const [value, setValue] = useState<T>(store.state);

  useEffect(() => {
    const callback = (value: T) => {
      setValue(value);
    };
    const unsubsribe = store.subsribe(callback);
    return () => unsubsribe(callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, store.emit];
};
