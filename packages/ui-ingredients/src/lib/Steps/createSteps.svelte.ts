import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as steps from '@zag-js/steps';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateStepsProps extends Omit<steps.Props, 'dir' | 'getRootNode'> {}

export interface CreateStepsReturn extends steps.Api {}

export function createSteps(props: Accessor<CreateStepsProps>): Accessor<CreateStepsReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(steps.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => steps.connect(service, normalizeProps);
}
