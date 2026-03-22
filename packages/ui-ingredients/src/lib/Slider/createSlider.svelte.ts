import * as slider from '@zag-js/slider';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateSliderProps extends Omit<slider.Props, 'dir' | 'getRootNode'> {}

export interface CreateSliderReturn extends slider.Api {}

export function createSlider(props: Accessor<CreateSliderProps>): Accessor<CreateSliderReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(slider.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => slider.connect(service, normalizeProps);
}
