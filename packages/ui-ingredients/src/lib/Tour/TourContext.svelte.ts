import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateTourReturn} from './createTour.svelte.js';

export const [getTourContext, setTourContext] = createContext<Accessor<CreateTourReturn>>();
