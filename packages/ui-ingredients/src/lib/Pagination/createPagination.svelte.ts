import type {Accessor} from '$lib/types.js';
import * as pagination from '@zag-js/pagination';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreatePaginationProps extends Omit<pagination.Props, 'dir' | 'getRootNode'> {}

export interface CreatePaginationReturn extends pagination.Api {}

export function createPagination(
  props: Accessor<CreatePaginationProps>,
): Accessor<CreatePaginationReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(pagination.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => pagination.connect(service, normalizeProps);
}
