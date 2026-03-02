import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as datePicker from '@zag-js/date-picker';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateDatePickerProps extends Omit<datePicker.Props, 'dir' | 'getRootNode'> {}

export interface CreateDatePickerReturn extends datePicker.Api {}

export function createDatePicker(
  props: Accessor<CreateDatePickerProps>,
): Accessor<CreateDatePickerReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(datePicker.machine, () => ({
    dir: locale?.().dir,
    locale: locale?.().locale,
    invalid: field?.().invalid,
    disabled: field?.().invalid,
    readOnly: field?.().readOnly,
    required: field?.().required,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => datePicker.connect(service, normalizeProps);
}
