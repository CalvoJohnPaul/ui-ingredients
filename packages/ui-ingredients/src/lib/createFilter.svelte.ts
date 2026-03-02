import {
  createFilter as zagCreateFilter,
  type FilterOptions,
  type FilterReturn,
} from '@zag-js/i18n-utils';
import {reflect} from '@zag-js/svelte';
import {isFunction} from 'es-toolkit';
import {getLocaleContext} from './LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from './types.js';

export interface CreateFilterOptions extends FilterOptions {}
export interface CreateFilterReturn extends FilterReturn {}

export function createFilter(
  options?: CreateFilterOptions | Accessor<CreateFilterOptions>,
): CreateFilterReturn {
  const locale = getLocaleContext();

  const filter = $derived(
    zagCreateFilter({
      locale: locale?.().locale,
      sensitivity: 'base',
      ...(isFunction(options) ? options() : options),
    }),
  );

  return reflect(() => filter);
}
