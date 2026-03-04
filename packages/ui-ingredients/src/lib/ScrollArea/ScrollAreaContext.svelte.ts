import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateScrollAreaReturn} from './createScrollArea.svelte.js';

export const [getScrollAreaContext, setScrollAreaContext] =
  createContext<Accessor<CreateScrollAreaReturn>>();
