import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as tour from '@zag-js/tour';
import type {HTMLButtonAttributes} from 'svelte/elements';
import type {SetOptional} from 'type-fest';
import {parts} from './Tour.anatomy.js';

export interface TourStepDetails extends SetOptional<tour.StepDetails, 'id'> {}

export interface ElementIds extends tour.ElementIds {
  trigger?: string;
}

export interface CreateTourProps extends Omit<tour.Props, 'ids' | 'dir' | 'steps' | 'getRootNode'> {
  ids?: ElementIds;
  steps?: TourStepDetails[];
}

export interface CreateTourReturn extends tour.Api {
  getTriggerProps(): HTMLButtonAttributes;
}

export function createTour(props: Accessor<CreateTourProps>): Accessor<CreateTourReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const steps = $derived.by(() => {
    return props().steps?.map((step, index) => ({
      id: `tour:${props().id}:step:${index}`,
      ...step,
    }));
  });

  const service = useMachine(tour.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
    steps,
  }));

  return () => {
    const api = tour.connect(service, normalizeProps);

    return {
      ...api,
      getTriggerProps() {
        return {
          id: `tour:${props().id}:trigger`,
          onclick() {
            api.start();
          },
          'data-state': api.open ? 'open' : 'closed',
          ...parts.trigger.attrs,
        };
      },
    };
  };
}
