import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateMarqueeReturn} from './createMarquee.svelte.js';

export const [getMarqueeContext, setMarqueeContext] =
  createContext<Accessor<CreateMarqueeReturn>>();
