import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreatePinInputReturn} from './createPinInput.svelte.js';

export const [getPinInputContext, setPinInputContext] =
  createContext<Accessor<CreatePinInputReturn>>();
