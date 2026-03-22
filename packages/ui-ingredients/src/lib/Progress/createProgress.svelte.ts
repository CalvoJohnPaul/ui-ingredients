import * as progress from '@zag-js/progress';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateProgressProps extends Omit<progress.Props, 'dir' | 'getRootNode'> {}

export interface CreateProgressReturn extends progress.Api {}

export function createProgress(
  props: Accessor<CreateProgressProps>,
): Accessor<CreateProgressReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(progress.machine, () => ({
    dir: locale?.().dir,
    locale: locale?.().locale,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => progress.connect(service, normalizeProps);
}
