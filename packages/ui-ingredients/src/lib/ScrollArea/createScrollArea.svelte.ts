import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as scrollArea from '@zag-js/scroll-area';
import {normalizeProps, useMachine, type PropTypes} from '@zag-js/svelte';

export interface CreateScrollAreaProps extends Omit<scrollArea.Props, 'dir' | 'getRootNode'> {}
export interface CreateScrollAreaReturn extends scrollArea.Api<PropTypes> {}

export function createScrollArea(
  props: Accessor<CreateScrollAreaProps>,
): Accessor<CreateScrollAreaReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(scrollArea.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => scrollArea.connect(service, normalizeProps);
}
