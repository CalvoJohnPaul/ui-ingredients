import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateNumberInputReturn} from './createNumberInput.svelte.js';

export const [getNumberInputContext, setNumberInputContext] =
  createContext<Accessor<CreateNumberInputReturn>>();
