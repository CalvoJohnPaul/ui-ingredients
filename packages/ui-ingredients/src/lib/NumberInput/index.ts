export * as NumberInput from './NumberInput.js';

export type {NumberInputControlTriggerProps} from './NumberInputControl.svelte';
export type {NumberInputDecrementTriggerProps} from './NumberInputDecrementTrigger.svelte';
export type {NumberInputIncrementTriggerProps} from './NumberInputIncrementTrigger.svelte';
export type {NumberInputInputProps} from './NumberInputInput.svelte';
export type {NumberInputLabelProps} from './NumberInputLabel.svelte';
export type {NumberInputProps} from './NumberInputRoot.svelte';
export type {NumberInputScrubberProps} from './NumberInputScrubber.svelte';
export type {NumberInputValueTextProps} from './NumberInputValueText.svelte';

export {
  createNumberInput,
  type CreateNumberInputProps,
  type CreateNumberInputReturn,
} from './createNumberInput.svelte.js';
export {
  getNumberInputContext,
  setNumberInputContext,
} from './NumberInputContext.svelte.js';

export {anatomy as numberInputAnatomy} from '@zag-js/number-input';
