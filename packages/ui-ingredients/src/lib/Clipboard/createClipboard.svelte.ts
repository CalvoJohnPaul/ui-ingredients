import * as clipboard from '@zag-js/clipboard';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';

export interface CreateClipboardProps extends Omit<clipboard.Props, 'getRootNode'> {}

export interface CreateClipboardReturn extends clipboard.Api {}

export function createClipboard(
  props: Accessor<CreateClipboardProps>,
): Accessor<CreateClipboardReturn> {
  const environment = getEnvironmentContext();

  const service = useMachine(clipboard.machine, () => ({
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => clipboard.connect(service, normalizeProps);
}
