import type {Accessor} from '$lib/types.js';
import * as hoverCard from '@zag-js/hover-card';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateHoverCardProps extends Omit<hoverCard.Props, 'dir' | 'getRootNode'> {}

export interface CreateHoverCardReturn extends hoverCard.Api {}

export function createHoverCard(
  props: Accessor<CreateHoverCardProps>,
): Accessor<CreateHoverCardReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(hoverCard.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => hoverCard.connect(service, normalizeProps);
}
