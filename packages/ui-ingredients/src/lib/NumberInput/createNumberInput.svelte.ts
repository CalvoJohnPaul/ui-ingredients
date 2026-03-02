import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as numberInput from '@zag-js/number-input';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateNumberInputProps extends Omit<numberInput.Props, 'dir' | 'getRootNode'> {}

export interface CreateNumberInputReturn extends numberInput.Api {}

export function createNumberInput(
  props: Accessor<CreateNumberInputProps>,
): Accessor<CreateNumberInputReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(numberInput.machine, () => ({
    dir: locale?.().dir,
    ids: {
      label: field?.().ids.label,
      input: field?.().ids.control,
    },
    locale: locale?.().locale,
    invalid: field?.().invalid,
    disabled: field?.().disabled,
    readOnly: field?.().readOnly,
    required: field?.().required,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => {
    const api = numberInput.connect(service, normalizeProps);

    return {
      ...api,
      getInputProps() {
        return {
          'aria-describedby': field?.()['aria-describedby'],
          ...api.getInputProps(),
        };
      },
    };
  };
}
