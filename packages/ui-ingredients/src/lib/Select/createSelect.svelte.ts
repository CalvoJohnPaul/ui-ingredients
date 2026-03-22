import * as select from '@zag-js/select';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';

export interface CreateSelectProps extends Omit<select.Props, 'dir' | 'getRootNode'> {}

export interface CreateSelectReturn extends select.Api {}

export function createSelect(props: Accessor<CreateSelectProps>): Accessor<CreateSelectReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(select.machine, () => ({
    ids: {
      label: field?.().ids.label,
      hiddenSelect: field?.().ids.control,
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
    const api = select.connect(service, normalizeProps);

    return {
      ...api,
      getHiddenSelectProps() {
        return {
          'aria-describedby': field?.()['aria-describedby'],
          ...api.getHiddenSelectProps(),
        };
      },
    };
  };
}
