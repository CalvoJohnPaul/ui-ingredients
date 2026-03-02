import type {Accessor} from '$lib/types.js';
import type {ItemProps} from '@zag-js/steps';
import {createContext} from 'svelte';
import type {CreateStepsReturn} from './createSteps.svelte.js';

export const [getStepsContext, setStepsContext] = createContext<Accessor<CreateStepsReturn>>();
export const [getStepsItemPropsContext, setStepsItemPropsContext] =
  createContext<Accessor<ItemProps>>();
