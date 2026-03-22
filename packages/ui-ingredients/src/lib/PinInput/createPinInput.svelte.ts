import * as pinInput from '@zag-js/pin-input';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreatePinInputProps extends Omit<pinInput.Props, 'dir' | 'getRootNode'> {}

export interface CreatePinInputReturn extends pinInput.Api {}

export function createPinInputContext(
  props: Accessor<CreatePinInputProps>,
): Accessor<CreatePinInputReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(pinInput.machine, () => ({
    dir: locale?.().dir,
    ids: {
      label: field?.().ids.label,
      hiddenInput: field?.().ids.control,
    },
    invalid: field?.().invalid,
    required: field?.().required,
    disabled: field?.().disabled,
    readOnly: field?.().readOnly,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => pinInput.connect(service, normalizeProps);
}
