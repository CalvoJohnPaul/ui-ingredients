import type {Accessor} from '$lib/types.js';
import * as checkbox from '@zag-js/checkbox';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '../Field/FieldContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateCheckboxProps extends Omit<checkbox.Props, 'dir' | 'getRootNode'> {}

export interface CreateCheckboxReturn extends checkbox.Api {}

export function createCheckbox(
  props: Accessor<CreateCheckboxProps>,
): Accessor<CreateCheckboxReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(checkbox.machine, () => ({
    dir: locale?.().dir,
    ids: {
      label: field?.().ids.label,
      hiddenInput: field?.().ids.control,
    },
    invalid: field?.().invalid,
    disabled: field?.().disabled,
    readOnly: field?.().readOnly,
    required: field?.().required,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => checkbox.connect(service, normalizeProps);
}
