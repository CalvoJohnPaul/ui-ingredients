import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateToggleGroupReturn} from './createToggleGroup.svelte.js';

export const [getToggleGroupContext, setToggleGroupContext] =
  createContext<Accessor<CreateToggleGroupReturn>>();
