import {createSafeContext} from '$lib/createSafeContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import type {AreaProps, ChannelProps, ColorFormat, SwatchProps} from '@zag-js/color-picker';
import {createContext} from 'svelte';
import type {CreateColorPickerReturn} from './createColorPicker.svelte.js';

export const [getColorPickerContext, setColorPickerContext] =
  createContext<Accessor<CreateColorPickerReturn>>();
export const [getColorPickerAreaPropsContext, setColorPickerAreaPropsContext] =
  createContext<Accessor<AreaProps>>();
export const [getColorPickerSwatchPropsContext, setColorPickerSwatchPropsContext] =
  createContext<Accessor<SwatchProps>>();
export const [getColorPickerFormatPropsContext, setColorPickerFormatPropsContext] =
  createSafeContext<Accessor<{format: ColorFormat}>>();
export const [getColorPickerChannelPropsContext, setColorPickerChannelPropsContext] =
  createContext<Accessor<ChannelProps>>();
