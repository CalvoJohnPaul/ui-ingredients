import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateProgressReturn} from './createProgress.svelte.js';

export const [getProgressContext, setProgressContext] =
  createContext<Accessor<CreateProgressReturn>>();
