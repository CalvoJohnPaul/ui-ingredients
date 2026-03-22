import type {ScrollbarProps} from '@zag-js/scroll-area';
import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateScrollAreaReturn} from './createScrollArea.svelte.js';

export const [getScrollAreaContext, setScrollAreaContext] =
  createContext<Accessor<CreateScrollAreaReturn>>();

export const [getScrollBarPropsContext, setScrollBarPropsContext] =
  createContext<Accessor<ScrollbarProps>>();
