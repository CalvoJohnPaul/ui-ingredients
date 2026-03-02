import type {Accessor} from '$lib/types.js';
import * as listbox from '@zag-js/listbox';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateListboxProps extends Omit<listbox.Props, 'dir' | 'getRootNode'> {}

export interface CreateListboxReturn extends listbox.Api {}

export function createListbox(props: Accessor<CreateListboxProps>): Accessor<CreateListboxReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(listbox.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => listbox.connect(service, normalizeProps);
}
