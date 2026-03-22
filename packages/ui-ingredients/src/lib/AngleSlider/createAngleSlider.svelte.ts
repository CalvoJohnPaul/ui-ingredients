import * as angleSlider from '@zag-js/angle-slider';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateAngleSliderProps extends Omit<angleSlider.Props, 'dir' | 'getRootNode'> {}

export interface CreateAngleSliderReturn extends angleSlider.Api {}

export function createAngleSlider(
  props: Accessor<CreateAngleSliderProps>,
): Accessor<CreateAngleSliderReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(angleSlider.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => angleSlider.connect(service, normalizeProps);
}
