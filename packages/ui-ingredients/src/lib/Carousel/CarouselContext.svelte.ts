import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateCarouselReturn} from './createCarousel.svelte.js';

export const [getCarouselContext, setCarouselContext] =
  createContext<Accessor<CreateCarouselReturn>>();
