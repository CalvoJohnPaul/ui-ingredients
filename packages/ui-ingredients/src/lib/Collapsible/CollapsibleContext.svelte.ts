import {createContext} from 'svelte';
import type {Accessor} from '../types.js';
import type {CreateCollapsibleReturn} from './createCollapsible.svelte.js';

export const [getCollapsibleContext, setCollapsibleContext] =
  createContext<Accessor<CreateCollapsibleReturn>>();
