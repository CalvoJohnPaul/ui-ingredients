import type {Accessor} from '$lib/types.js';
import * as colorPicker from '@zag-js/color-picker';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {HTMLAttributes} from 'svelte/elements';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';
import {parts} from './ColorPicker.anatomy.js';

interface ElementIds extends colorPicker.ElementIds {
  view?: string;
}

export interface CreateColorPickerProps
  extends Omit<colorPicker.Props, 'ids' | 'dir' | 'getRootNode'> {
  ids?: ElementIds;
}

export interface CreateColorPickerReturn extends colorPicker.Api {
  getViewProps(props: {format: colorPicker.ColorFormat}): HTMLAttributes<HTMLElement>;
  getFormats(): {label: string; value: colorPicker.ColorFormat}[];
}

export function createColorPicker(
  props: Accessor<CreateColorPickerProps>,
): Accessor<CreateColorPickerReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(colorPicker.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => {
    const api = colorPicker.connect(service, normalizeProps);

    return {
      ...api,
      getViewProps(viewProps) {
        return {
          id: `colorPicker:${props().id}:view`,
          hidden: viewProps.format !== api.format,
          'data-format': api.format,
          ...parts.view.attrs,
        };
      },
      getFormats() {
        return [
          {
            label: 'RGBA',
            value: 'rgba',
          },
          {
            label: 'HSLA',
            value: 'hsla',
          },
          {
            label: 'HSBA',
            value: 'hsba',
          },
        ];
      },
    };
  };
}
