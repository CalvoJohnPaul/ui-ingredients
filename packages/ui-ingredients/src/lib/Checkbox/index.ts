export * as Checkbox from './Checkbox.js';

export type {CheckboxControlProps} from './CheckboxControl.svelte';
export type {CheckboxHiddenInputProps} from './CheckboxHiddenInput.svelte';
export type {CheckboxIndicatorProps} from './CheckboxIndicator.svelte';
export type {CheckboxLabelProps} from './CheckboxLabel.svelte';
export type {CheckboxProps} from './CheckboxRoot.svelte';

export {
  getCheckboxContext,
  setCheckboxContext,
} from './CheckboxContext.svelte.js';
export {
  createCheckbox,
  type CreateCheckboxProps,
  type CreateCheckboxReturn,
} from './createCheckbox.svelte.js';

export {anatomy as checkboxAnatomy} from '@zag-js/checkbox';
