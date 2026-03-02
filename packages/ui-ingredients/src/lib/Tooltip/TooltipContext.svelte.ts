import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateTooltipReturn} from './createTooltip.svelte.js';

export const [getTooltipContext, setTooltipContext] =
  createContext<Accessor<CreateTooltipReturn>>();
