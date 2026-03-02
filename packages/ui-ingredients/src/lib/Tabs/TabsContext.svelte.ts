import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateTabsReturn} from './createTabs.svelte.js';

export const [getTabsContext, setTabsContext] = createContext<Accessor<CreateTabsReturn>>();
