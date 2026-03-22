import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateTooltipReturn} from './createTooltip.svelte.js';

export const [getTooltipContext, setTooltipContext] =
  createContext<Accessor<CreateTooltipReturn>>();
