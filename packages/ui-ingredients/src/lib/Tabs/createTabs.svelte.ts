import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as tabs from '@zag-js/tabs';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateTabsProps extends Omit<tabs.Props, 'dir' | 'getRootNode'> {}

export interface CreateTabsReturn extends tabs.Api {}

export function createTabs(props: Accessor<CreateTabsProps>): Accessor<CreateTabsReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(tabs.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => tabs.connect(service, normalizeProps);
}
