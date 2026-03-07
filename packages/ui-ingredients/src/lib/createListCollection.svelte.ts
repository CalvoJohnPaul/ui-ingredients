import {type CollectionOptions, ListCollection} from '@zag-js/collection';
import {reflect} from '@zag-js/svelte';
import {isFunction} from 'es-toolkit';
import type {Accessor} from './types.js';

export interface CreateListCollectionOptions<T> extends CollectionOptions<T> {}

export function createListCollection<T>(
  options: CreateListCollectionOptions<T> | Accessor<CreateListCollectionOptions<T>>,
): ListCollection<T> {
  const collection = $derived(new ListCollection(isFunction(options) ? options() : options));
  return reflect(() => collection);
}

export type {ListCollection};
