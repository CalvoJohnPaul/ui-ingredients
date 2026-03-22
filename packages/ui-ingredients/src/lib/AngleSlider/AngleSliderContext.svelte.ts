import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateAngleSliderReturn} from './createAngleSlider.svelte.js';

export const [getAngleSliderContext, setAngleSliderContext] =
  createContext<Accessor<CreateAngleSliderReturn>>();
