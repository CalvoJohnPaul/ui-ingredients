import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreatePopoverReturn} from './createPopover.svelte.js';

export const [getPopoverContext, setPopoverContext] =
  createContext<Accessor<CreatePopoverReturn>>();
