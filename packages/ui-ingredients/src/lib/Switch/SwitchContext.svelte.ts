import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateSwitchReturn} from './createSwitch.svelte.js';

export const [getSwitchContext, setSwitchContext] = createContext<Accessor<CreateSwitchReturn>>();
