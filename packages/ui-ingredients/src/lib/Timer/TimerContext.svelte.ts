import type {Accessor} from '$lib/types.js';
import type {ItemProps} from '@zag-js/timer';
import {createContext} from 'svelte';
import type {CreateTimerReturn} from './createTimer.svelte.js';

export const [getTimerContext, setTimerContext] = createContext<Accessor<CreateTimerReturn>>();
export const [getTimerItemPropsContext, setTimerItemPropsContext] =
  createContext<Accessor<ItemProps>>();
