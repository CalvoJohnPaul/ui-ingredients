import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateHoverCardReturn} from './createHoverCard.svelte.js';

export const [getHoverCardContext, setHoverCardContext] =
  createContext<Accessor<CreateHoverCardReturn>>();
