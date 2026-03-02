import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as timer from '@zag-js/timer';

export interface CreateTimerProps extends Omit<timer.Props, 'getRootNode'> {}
export interface CreateTimerReturn extends timer.Api {}

export function createTimer(props: Accessor<CreateTimerProps>): Accessor<CreateTimerReturn> {
  const environment = getEnvironmentContext();

  const service = useMachine(timer.machine, () => ({
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => timer.connect(service, normalizeProps);
}
