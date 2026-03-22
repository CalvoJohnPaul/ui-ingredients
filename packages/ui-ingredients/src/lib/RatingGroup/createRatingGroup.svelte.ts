import * as ratingGroup from '@zag-js/rating-group';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getFieldContext} from '$lib/Field/FieldContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';

export interface CreateRatingGroupProps extends Omit<ratingGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateRatingGroupReturn extends ratingGroup.Api {}

export function createRatingGroup(
  props: Accessor<CreateRatingGroupProps>,
): Accessor<CreateRatingGroupReturn> {
  const field = getFieldContext();
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(ratingGroup.machine, () => ({
    dir: locale?.().dir,
    ids: {
      label: field?.().ids.label,
      hiddenInput: field?.().ids.control,
    },
    required: field?.().required,
    disabled: field?.().disabled,
    readOnly: field?.().readOnly,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => ratingGroup.connect(service, normalizeProps);
}
