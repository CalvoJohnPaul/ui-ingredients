import * as collapsible from '@zag-js/collapsible';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '../types.js';

export interface CreateCollapsibleProps extends Omit<collapsible.Props, 'dir' | 'getRootNode'> {}

export interface CreateCollapsibleReturn extends collapsible.Api {}

export function createCollapsible(
  props: Accessor<CreateCollapsibleProps>,
): Accessor<CreateCollapsibleReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(collapsible.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => collapsible.connect(service, normalizeProps);
}
