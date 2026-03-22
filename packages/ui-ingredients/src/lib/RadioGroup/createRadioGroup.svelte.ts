import * as radioGroup from '@zag-js/radio-group';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';

export interface CreateRadioGroupProps extends Omit<radioGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateRadioGroupReturn extends radioGroup.Api {}

export function createRadioGroup(
  props: Accessor<CreateRadioGroupProps>,
): Accessor<CreateRadioGroupReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(radioGroup.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => radioGroup.connect(service, normalizeProps);
}
