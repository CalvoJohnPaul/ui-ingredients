import {createSafeContext} from '$lib/createSafeContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import type {ItemGroupProps, OptionItemProps} from '@zag-js/menu';
import {createContext} from 'svelte';
import type {HTMLButtonAttributes} from 'svelte/elements';
import type {CreateMenuReturn} from './createMenu.svelte.js';

export const [getMenuContext, setMenuContext] = createSafeContext<Accessor<CreateMenuReturn>>();
export const [getMenuItemGroupPropsContext, setMenuItemGroupPropsContext] =
  createContext<Accessor<ItemGroupProps>>();
export const [getMenuOptionItemPropsContext, setMenuOptionItemPropsContext] =
  createContext<Accessor<OptionItemProps>>();
export const [getMenuTriggerItemContext, setMenuTriggerItemContext] =
  createContext<Accessor<HTMLButtonAttributes>>();
