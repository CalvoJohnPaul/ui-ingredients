import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as carousel from '@zag-js/carousel';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateCarouselProps extends Omit<carousel.Props, 'dir' | 'getRootNode'> {}

export interface CreateCarouselReturn extends carousel.Api {}

export function createCarousel(
  props: Accessor<CreateCarouselProps>,
): Accessor<CreateCarouselReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(carousel.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => carousel.connect(service, normalizeProps);
}
