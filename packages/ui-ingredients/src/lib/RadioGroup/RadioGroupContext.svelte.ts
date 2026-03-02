import type {Accessor} from '$lib/types.js';
import type {ItemProps} from '@zag-js/radio-group';
import {createContext} from 'svelte';
import type {CreateRadioGroupReturn} from './createRadioGroup.svelte.js';

export const [getRadioGroupContext, setRadioGroupContext] =
  createContext<Accessor<CreateRadioGroupReturn>>();

export const [getRadioGroupItemPropsContext, setRadioGroupItemPropsContext] =
  createContext<Accessor<ItemProps>>();
