export * as Clipboard from './Clipboard.js';

export type {ClipboardControlProps} from './ClipboardControl.svelte';
export type {ClipboardIndicatorProps} from './ClipboardIndicator.svelte';
export type {ClipboardInputProps} from './ClipboardInput.svelte';
export type {ClipboardLabelProps} from './ClipboardLabel.svelte';
export type {ClipboardProps} from './ClipboardRoot.svelte';
export type {ClipboardTriggerProps} from './ClipboardTrigger.svelte';

export {
  getClipboardContext,
  setClipboardContext,
} from './ClipboardContext.svelte.js';
export {
  createClipboard,
  type CreateClipboardProps,
  type CreateClipboardReturn,
} from './createClipboard.svelte.js';

export {anatomy as clipboardAnatomy} from '@zag-js/clipboard';
