export * as Slider from './Slider.js';

export type {SliderControlProps} from './SliderControl.svelte';
export type {SliderDraggingIndicatorProps} from './SliderDraggingIndicator.svelte';
export type {SliderHiddenInputProps} from './SliderHiddenInput.svelte';
export type {SliderLabelProps} from './SliderLabel.svelte';
export type {SliderMarkerProps} from './SliderMarker.svelte';
export type {SliderMarkerGroupProps} from './SliderMarkerGroup.svelte';
export type {SliderRangeProps} from './SliderRange.svelte';
export type {SliderProps} from './SliderRoot.svelte';
export type {SliderThumbProps} from './SliderThumb.svelte';
export type {SliderTrackProps} from './SliderTrack.svelte';
export type {SliderValueTextProps} from './SliderValueText.svelte';

export {
  createSlider,
  type CreateSliderProps,
  type CreateSliderReturn,
} from './createSlider.svelte.js';
export {getSliderContext, setSliderContext} from './SliderContext.svelte.js';

export {anatomy as sliderAnatomy} from '@zag-js/slider';
