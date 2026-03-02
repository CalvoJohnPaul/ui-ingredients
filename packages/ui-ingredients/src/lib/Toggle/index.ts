export * as Toggle from './Toggle.js';

export type {ToggleIndicatorProps} from './ToggleIndicator.svelte';
export type {ToggleProps} from './ToggleRoot.svelte';

export {
  createToggle,
  type CreateToggleProps,
  type CreateToggleReturn,
} from './createToggle.svelte.js';
export {getToggleContext, setToggleContext} from './ToggleContext.svelte.js';

export {anatomy as toggleAnatomy} from '@zag-js/toggle';
