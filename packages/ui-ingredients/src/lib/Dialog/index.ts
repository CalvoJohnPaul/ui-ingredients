export * as Dialog from './Dialog.js';

export type {DialogBackdropProps} from './DialogBackdrop.svelte';
export type {DialogCloseTriggerProps} from './DialogCloseTrigger.svelte';
export type {DialogContentProps} from './DialogContent.svelte';
export type {DialogDescriptionProps} from './DialogDescription.svelte';
export type {DialogPositionerProps} from './DialogPositioner.svelte';
export type {DialogProps} from './DialogRoot.svelte';
export type {DialogTitleProps} from './DialogTitle.svelte';
export type {DialogTriggerProps} from './DialogTrigger.svelte';

export {
  createDialog,
  type CreateDialogProps,
  type CreateDialogReturn,
} from './createDialog.svelte.js';
export {
  getDialogContext,
  setDialogContext,
} from './DialogContext.svelte.js';

export {anatomy as dialogAnatomy} from '@zag-js/dialog';
