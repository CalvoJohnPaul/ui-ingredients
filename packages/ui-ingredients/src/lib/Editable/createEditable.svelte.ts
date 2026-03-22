import * as editable from '@zag-js/editable';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateEditableProps extends Omit<editable.Props, 'dir' | 'getRootNode'> {}

export interface CreateEditableReturn extends editable.Api {}

export function createEditable(
  props: Accessor<CreateEditableProps>,
): Accessor<CreateEditableReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(editable.machine, () => ({
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

  return () => {
    const api = editable.connect(service, normalizeProps);

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
