import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateDrawerReturn} from './createDrawer.svelte.js';

export const [getDrawerContext, setDrawerContext] = createContext<Accessor<CreateDrawerReturn>>();
