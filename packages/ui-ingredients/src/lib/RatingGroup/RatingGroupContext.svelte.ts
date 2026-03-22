import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateRatingGroupReturn} from './createRatingGroup.svelte.js';

export const [getRatingGroupContext, setRatingGroupContext] =
  createContext<Accessor<CreateRatingGroupReturn>>();
