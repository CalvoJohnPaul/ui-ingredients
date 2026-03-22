import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateToggleReturn} from './createToggle.svelte.js';

export const [getToggleContext, setToggleContext] = createContext<Accessor<CreateToggleReturn>>();
