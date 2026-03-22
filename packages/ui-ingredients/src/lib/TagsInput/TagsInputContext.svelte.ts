import type {ItemProps} from '@zag-js/tags-input';
import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateTagsInputReturn} from './createTagsInput.svelte.js';

export const [getTagsInputContext, setTagsInputContext] =
  createContext<Accessor<CreateTagsInputReturn>>();
export const [getTagsInputItemPropsContext, setTagsInputItemPropsContext] =
  createContext<Accessor<ItemProps>>();
