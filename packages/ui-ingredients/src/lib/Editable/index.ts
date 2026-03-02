export * as Editable from './Editable.js';

export type {EditableAreaProps} from './EditableArea.svelte';
export type {EditableCancelTriggerProps} from './EditableCancelTrigger.svelte';
export type {EditableControlProps} from './EditableControl.svelte';
export type {EditableEditTriggerProps} from './EditableEditTrigger.svelte';
export type {EditableInputProps} from './EditableInput.svelte';
export type {EditableLabelProps} from './EditableLabel.svelte';
export type {EditablePreviewProps} from './EditablePreview.svelte';
export type {EditableProps} from './EditableRoot.svelte';
export type {EditableSubmitTriggerProps} from './EditableSubmitTrigger.svelte';

export {anatomy as editableAnatomy} from '@zag-js/editable';
export {
  createEditable,
  type CreateEditableProps,
  type CreateEditableReturn,
} from './createEditable.svelte.js';
export {
  getEditableContext,
  setEditableContext,
} from './EditableContext.svelte.js';
