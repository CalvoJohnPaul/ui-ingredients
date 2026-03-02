import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as floatingPanel from '@zag-js/floating-panel';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateFloatingPanelProps
  extends Omit<floatingPanel.Props, 'dir' | 'getRootNode'> {}

export interface CreateFloatingPanelReturn extends floatingPanel.Api {}

export function createFloatingPanel(
  props: Accessor<CreateFloatingPanelProps>,
): Accessor<CreateFloatingPanelReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(floatingPanel.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => floatingPanel.connect(service, normalizeProps);
}
