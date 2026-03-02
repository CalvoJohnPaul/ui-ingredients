import type {Accessor} from '$lib/types.js';
import type {ItemGroupProps, ItemProps} from '@zag-js/combobox';
import {createContext} from 'svelte';
import type {CreateComboboxReturn} from './createCombobox.svelte.js';

export const [getComboboxContext, setComboboxContext] =
  createContext<Accessor<CreateComboboxReturn>>();

export const [getComboboxItemPropsContext, setComboboxItemPropsContext] =
  createContext<Accessor<ItemProps>>();

export const [getComboboxItemGroupPropsContext, setComboboxItemGroupPropsContext] =
  createContext<Accessor<ItemGroupProps>>();
