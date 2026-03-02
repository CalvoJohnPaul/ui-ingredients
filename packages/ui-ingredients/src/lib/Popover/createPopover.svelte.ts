import type {Accessor} from '$lib/types.js';
import * as popover from '@zag-js/popover';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreatePopoverProps extends Omit<popover.Props, 'dir' | 'getRootNode'> {}

export interface CreatePopoverReturn extends popover.Api {}

export function createPopover(props: Accessor<CreatePopoverProps>): Accessor<CreatePopoverReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(popover.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => popover.connect(service, normalizeProps);
}
