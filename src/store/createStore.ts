import { TCallback, TCreateStore, TEmit, TUpdater } from "../types";

export const createStore = <T>(initialState: T): ReturnType<TCreateStore<T>> => {
  let state: T = initialState;
  const callbacks = new Set<TCallback<T>>();

  const emit: TEmit<T> = (valueOrUpdater) => {
    if (typeof valueOrUpdater === "function") {
      state = (valueOrUpdater as TUpdater<T>)(state);
    } else {
      state = valueOrUpdater;
    }
    for (let callback of Array.from(callbacks)) {
      callback(state);
    }
  };

  const subsribe = (callback: TCallback<T>) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  };

  return {
    state,
    emit,
    subsribe,
  };
};
