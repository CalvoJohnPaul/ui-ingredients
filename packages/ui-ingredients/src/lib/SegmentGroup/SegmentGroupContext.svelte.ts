import type {ItemProps} from '@zag-js/radio-group';
import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateSegmentGroupReturn} from './createSegmentGroup.svelte.js';

export const [getSegmentGroupContext, setSegmentGroupContext] =
  createContext<Accessor<CreateSegmentGroupReturn>>();
export const [getSegmentGroupItemPropsContext, setSegmentGroupItemPropsContext] =
  createContext<Accessor<ItemProps>>();
