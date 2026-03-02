import {createContext as createSvelteContext} from 'svelte';

export function createSafeContext<T>(): [() => T | null, (context: T) => T | null] {
  const [_get, set] = createSvelteContext<T>();

  const get = () => {
    try {
      return _get();
    } catch {
      return null;
    }
  };

  return [get, set];
}
