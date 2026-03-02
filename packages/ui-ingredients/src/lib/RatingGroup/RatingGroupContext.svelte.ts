import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateRatingGroupReturn} from './createRatingGroup.svelte.js';

export const [getRatingGroupContext, setRatingGroupContext] =
  createContext<Accessor<CreateRatingGroupReturn>>();
