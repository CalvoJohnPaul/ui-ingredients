import type {Accessor} from '$lib/types.js';
import * as splitter from '@zag-js/splitter';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateSplitterProps extends Omit<splitter.Props, 'dir' | 'getRootNode'> {}

export interface CreateSplitterReturn extends splitter.Api {}

export function createSplitter(
  props: Accessor<CreateSplitterProps>,
): Accessor<CreateSplitterReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(splitter.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => splitter.connect(service, normalizeProps);
}
