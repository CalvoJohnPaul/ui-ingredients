import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateFloatingPanelReturn} from './createFloatingPanel.svelte.js';

export const [getFloatingPanelContext, setFloatingPanelContext] =
  createContext<Accessor<CreateFloatingPanelReturn>>();
