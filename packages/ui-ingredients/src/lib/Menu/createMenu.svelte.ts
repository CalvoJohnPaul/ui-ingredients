import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as menu from '@zag-js/menu';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateMenuProps extends Omit<menu.Props, 'dir' | 'getRootNode'> {}

export interface CreateMenuReturn extends menu.Api {
  service: menu.Service;
}

export function createMenu(props: Accessor<CreateMenuProps>): Accessor<CreateMenuReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(menu.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => ({
    ...menu.connect(service, normalizeProps),
    service,
  });
}
