import type {Accessor} from '$lib/types.js';
import * as signaturePad from '@zag-js/signature-pad';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateSignaturePadProps extends Omit<signaturePad.Props, 'dir' | 'getRootNode'> {}

export interface CreateSignaturePadReturn extends signaturePad.Api {}

export function createSignaturePad(
  props: Accessor<CreateSignaturePadProps>,
): Accessor<CreateSignaturePadReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(signaturePad.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => signaturePad.connect(service, normalizeProps);
}
