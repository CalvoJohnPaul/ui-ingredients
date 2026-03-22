import type {ThumbProps} from '@zag-js/slider';
import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateSliderReturn} from './createSlider.svelte.js';

export const [getSliderContext, setSliderContext] = createContext<Accessor<CreateSliderReturn>>();
export const [getSliderThumbPropsContext, setSliderThumbPropsContext] =
  createContext<Accessor<ThumbProps>>();
