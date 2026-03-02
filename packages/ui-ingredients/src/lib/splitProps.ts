import {omit, pick} from 'es-toolkit';
import type {Simplify} from 'type-fest';

export function splitProps<T extends object, K extends keyof T>(
  props: T,
  keys: K[],
): [Simplify<Pick<T, K>>, Simplify<Omit<T, K>>] {
  const picked = pick(props, keys);
  const omitted = omit(props, keys);
  return [picked, omitted];
}
