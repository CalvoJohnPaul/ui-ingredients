import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as tooltip from '@zag-js/tooltip';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateTooltipProps extends Omit<tooltip.Props, 'dir' | 'getRootNode'> {}

export interface CreateTooltipReturn extends tooltip.Api {}

export function createTooltip(props: Accessor<CreateTooltipProps>): Accessor<CreateTooltipReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(tooltip.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => tooltip.connect(service, normalizeProps);
}
