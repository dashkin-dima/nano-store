export type TUpdater<S> = (prevState: S) => S;

export type TValueOrUpdater<S> = S | TUpdater<S>;

export type TCallback<T> = (state: T) => void;

export type TEmit<T> = (valueOrUpdater: TValueOrUpdater<T>) => void;

export type TUnsubsribe<T> = (callback: TCallback<T>) => void;

export type TSubsribe<T> = (callback: TCallback<T>) => TUnsubsribe<T>;

export type TCreateStore<T = any> = (initialState: T) => {
  state: T;
  emit: TEmit<T>;
  subsribe: TSubsribe<T>;
};

export type TUseStoreValue<T> = [T, TEmit<T>];
