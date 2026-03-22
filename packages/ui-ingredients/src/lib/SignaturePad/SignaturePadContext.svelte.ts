import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateSignaturePadReturn} from './createSignaturePad.svelte.js';

export const [getSignaturePadContext, setSignaturePadContext] =
  createContext<Accessor<CreateSignaturePadReturn>>();
