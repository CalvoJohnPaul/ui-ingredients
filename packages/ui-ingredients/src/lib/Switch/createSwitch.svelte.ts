import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as switch_ from '@zag-js/switch';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '../Field/FieldContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateSwitchProps extends Omit<switch_.Props, 'dir' | 'getRootNode'> {}

export interface CreateSwitchReturn extends switch_.Api {}

export function createSwitch(props: Accessor<CreateSwitchProps>): Accessor<CreateSwitchReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(switch_.machine, () => ({
    dir: locale?.().dir,
    ids: {
      label: field?.().ids.label,
      hiddenInput: field?.().ids.control,
    },
    disabled: field?.().disabled,
    readOnly: field?.().readOnly,
    invalid: field?.().invalid,
    required: field?.().required,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => switch_.connect(service, normalizeProps);
}
