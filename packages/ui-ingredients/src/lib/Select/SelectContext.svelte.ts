import type {Accessor} from '$lib/types.js';
import type {ItemGroupProps, ItemProps} from '@zag-js/select';
import {createContext} from 'svelte';
import type {CreateSelectReturn} from './createSelect.svelte.js';

export const [getSelectContext, setSelectContext] = createContext<Accessor<CreateSelectReturn>>();
export const [getSelectItemPropsContext, setSelectItemPropsContext] =
  createContext<Accessor<ItemProps>>();
export const [getSelectItemGroupPropsContext, setSelectItemGroupPropsContext] =
  createContext<Accessor<ItemGroupProps>>();
