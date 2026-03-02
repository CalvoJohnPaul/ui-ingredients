export * as Switch from './Switch.js';

export type {SwitchControlProps} from './SwitchControl.svelte';
export type {SwitchHiddenInputProps} from './SwitchHiddenInput.svelte';
export type {SwitchLabelProps} from './SwitchLabel.svelte';
export type {SwitchProps} from './SwitchRoot.svelte';
export type {SwitchThumbProps} from './SwitchThumb.svelte';

export {
  createSwitch,
  type CreateSwitchProps,
  type CreateSwitchReturn,
} from './createSwitch.svelte.js';
export {getSwitchContext, setSwitchContext} from './SwitchContext.svelte.js';

export {anatomy as switchAnatomy} from '@zag-js/switch';
