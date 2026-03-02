import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as combobox from '@zag-js/combobox';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateComboboxProps extends Omit<combobox.Props, 'dir' | 'getRootNode'> {}

export interface CreateComboboxReturn extends combobox.Api {}

export function createCombobox(
  props: Accessor<CreateComboboxProps>,
): Accessor<CreateComboboxReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(combobox.machine, () => ({
    ids: {
      label: field?.().ids.label,
      input: field?.().ids.control,
    },
    dir: locale?.().dir,
    invalid: field?.().invalid,
    disabled: field?.().disabled,
    readOnly: field?.().readOnly,
    required: field?.().required,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => combobox.connect(service, normalizeProps);
}
