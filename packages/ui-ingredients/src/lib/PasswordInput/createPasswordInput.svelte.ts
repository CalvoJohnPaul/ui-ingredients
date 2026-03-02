import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as passwordInput from '@zag-js/password-input';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreatePasswordInputProps
  extends Omit<passwordInput.Props, 'dir' | 'getRootNode'> {}

export interface CreatePasswordInputReturn extends passwordInput.Api {}

export function createPasswordInputContext(
  props: Accessor<CreatePasswordInputProps>,
): Accessor<CreatePasswordInputReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(passwordInput.machine, () => ({
    dir: locale?.().dir,
    ids: {
      label: field?.().ids.label,
      input: field?.().ids.control,
    },
    invalid: field?.().invalid,
    required: field?.().required,
    disabled: field?.().disabled,
    readOnly: field?.().readOnly,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => passwordInput.connect(service, normalizeProps);
}
