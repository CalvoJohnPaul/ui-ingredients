import {createSafeContext} from '$lib/createSafeContext.svelte.js';
import type {Accessor} from '../types.js';

export interface Environment {
  getRootNode(): ShadowRoot | Document | Node;
  getDocument(): Document;
  getWindow(): Window & typeof globalThis;
}

export const [getEnvironmentContext, setEnvironmentContext] =
  createSafeContext<Accessor<Environment>>();
