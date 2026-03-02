import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as fileUpload from '@zag-js/file-upload';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateFileUploadProps extends Omit<fileUpload.Props, 'dir' | 'getRootNode'> {}

export interface CreateFileUploadReturn extends fileUpload.Api {}

export function createFileUpload(
  props: Accessor<CreateFileUploadProps>,
): Accessor<CreateFileUploadReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(fileUpload.machine, () => ({
    dir: locale?.().dir,
    ids: {
      label: field?.().ids.label,
      hiddenInput: field?.().ids.control,
    },
    locale: locale?.().locale,
    invalid: field?.().invalid,
    disabled: field?.().disabled,
    required: field?.().required,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => fileUpload.connect(service, normalizeProps);
}
