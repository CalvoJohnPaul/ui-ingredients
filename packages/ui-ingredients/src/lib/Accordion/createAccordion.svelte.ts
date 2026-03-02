import * as accordion from '@zag-js/accordion';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '../types.js';

export interface CreateAccordionProps extends Omit<accordion.Props, 'dir' | 'getRootNode'> {}

export interface CreateAccordionReturn extends accordion.Api {}

export function createAccordion(
  props: Accessor<CreateAccordionProps>,
): Accessor<CreateAccordionReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();
  const service = useMachine(accordion.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => accordion.connect(service, normalizeProps);
}
