import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateClipboardReturn} from './createClipboard.svelte.js';

export const [getClipboardContext, setClipboardContext] =
  createContext<Accessor<CreateClipboardReturn>>();
