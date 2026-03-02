import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateCheckboxReturn} from './createCheckbox.svelte.js';

export const [getCheckboxContext, setCheckboxContext] =
  createContext<Accessor<CreateCheckboxReturn>>();
