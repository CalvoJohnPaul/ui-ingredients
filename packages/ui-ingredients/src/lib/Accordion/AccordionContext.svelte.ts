import type {ItemProps} from '@zag-js/accordion';
import {createContext} from 'svelte';
import type {Accessor} from '../types.js';
import type {CreateAccordionReturn} from './createAccordion.svelte.js';

export const [getAccordionContext, setAccordionContext] =
  createContext<Accessor<CreateAccordionReturn>>();
export const [getAccordionItemPropsContext, setAccordionItemPropsContext] =
  createContext<Accessor<ItemProps>>();
