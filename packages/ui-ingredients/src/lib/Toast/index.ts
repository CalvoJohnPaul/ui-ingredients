export * as Toast from './Toast.js';
export {default as Toaster, type ToasterProps} from './Toaster.svelte';

export type {ToastActionTriggerProps} from './ToastActionTrigger.svelte';
export type {ToastCloseTriggerProps} from './ToastCloseTrigger.svelte';
export type {ToastDescriptionProps} from './ToastDescription.svelte';
export type {ToastGhostAfterProps} from './ToastGhostAfter.svelte';
export type {ToastGhostBeforeProps} from './ToastGhostBefore.svelte';
export type {ToastProps} from './ToastRoot.svelte';
export type {ToastTitleProps} from './ToastTitle.svelte';

export {
  createToaster,
  type CreateToasterProps,
  type CreateToasterReturn,
} from './createToaster.svelte.js';

export {anatomy as toastAnatomy} from '@zag-js/toast';
