import type {ItemGroupProps, ItemProps} from '@zag-js/listbox';
import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateListboxReturn} from './createListbox.svelte.js';

export const [getListboxContext, setListboxContext] =
  createContext<Accessor<CreateListboxReturn>>();
export const [getListboxItemPropsContext, setListboxItemPropsContext] =
  createContext<Accessor<ItemProps>>();
export const [getListboxItemGroupPropsContext, setListboxItemGroupPropsContext] =
  createContext<Accessor<ItemGroupProps>>();
