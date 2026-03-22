import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateMarqueeReturn} from './createMarquee.svelte.js';

export const [getMarqueeContext, setMarqueeContext] =
  createContext<Accessor<CreateMarqueeReturn>>();
