import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateToggleGroupReturn} from './createToggleGroup.svelte.js';

export const [getToggleGroupContext, setToggleGroupContext] =
  createContext<Accessor<CreateToggleGroupReturn>>();
