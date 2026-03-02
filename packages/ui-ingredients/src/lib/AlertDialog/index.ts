export * as AlertDialog from './AlertDialog.js';

export type {AlertDialogBackdropProps} from './AlertDialogBackdrop.svelte';
export type {AlertDialogCloseTriggerProps} from './AlertDialogCloseTrigger.svelte';
export type {AlertDialogContentProps} from './AlertDialogContent.svelte';
export type {AlertDialogDescriptionProps} from './AlertDialogDescription.svelte';
export type {AlertDialogPositionerProps} from './AlertDialogPositioner.svelte';
export type {AlertDialogProps} from './AlertDialogRoot.svelte';
export type {AlertDialogTitleProps} from './AlertDialogTitle.svelte';
export type {AlertDialogTriggerProps} from './AlertDialogTrigger.svelte';

export {
  getAlertDialogContext,
  setAlertDialogContext,
} from './AlertDialogContext.svelte.js';
export {
  createAlertDialog,
  type CreateAlertDialogProps,
  type CreateAlertDialogReturn,
} from './createAlertDialog.svelte.js';

export {anatomy as alertDialogAnatomy} from './AlertDialog.anatomy.js';
