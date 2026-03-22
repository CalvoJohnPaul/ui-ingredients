import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateNumberInputReturn} from './createNumberInput.svelte.js';

export const [getNumberInputContext, setNumberInputContext] =
  createContext<Accessor<CreateNumberInputReturn>>();
