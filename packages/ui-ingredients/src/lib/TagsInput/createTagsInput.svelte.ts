import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as tagsInput from '@zag-js/tags-input';
export interface CreateTagsInputProps extends Omit<tagsInput.Props, 'dir' | 'getRootNode'> {}

export interface CreateTagsInputReturn extends tagsInput.Api {}

export function createTagsInput(
  props: Accessor<CreateTagsInputProps>,
): Accessor<CreateTagsInputReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(tagsInput.machine, () => ({
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

  return () => tagsInput.connect(service, normalizeProps);
}
