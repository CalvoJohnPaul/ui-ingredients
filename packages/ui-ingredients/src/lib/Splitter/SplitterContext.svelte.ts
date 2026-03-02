import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateSplitterReturn} from './createSplitter.svelte.js';

export const [getSplitterContext, setSplitterContext] =
  createContext<Accessor<CreateSplitterReturn>>();
