import {TreeCollection, type TreeCollectionOptions} from '@zag-js/collection';
import {reflect} from '@zag-js/svelte';
import {isFunction} from 'es-toolkit';
import type {Accessor} from './types.js';

export interface CreateTreeCollectionOptions<T> extends TreeCollectionOptions<T> {}

export function createTreeCollection<T>(
  options: CreateTreeCollectionOptions<T> | Accessor<CreateTreeCollectionOptions<T>>,
): TreeCollection<T> {
  const collection = $derived(new TreeCollection(isFunction(options) ? options() : options));
  return reflect(() => collection);
}

export type {TreeCollection};
