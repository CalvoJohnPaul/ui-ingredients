export * as Popover from './Popover.js';

export type {PopoverAnchorProps} from './PopoverAnchor.svelte';
export type {PopoverArrowProps} from './PopoverArrow.svelte';
export type {PopoverArrowTipProps} from './PopoverArrowTip.svelte';
export type {PopoverCloseTriggerProps} from './PopoverCloseTrigger.svelte';
export type {PopoverContentProps} from './PopoverContent.svelte';
export type {PopoverDescriptionProps} from './PopoverDescription.svelte';
export type {PopoverIndicatorProps} from './PopoverIndicator.svelte';
export type {PopoverPositionerProps} from './PopoverPositioner.svelte';
export type {PopoverProps} from './PopoverRoot.svelte';
export type {PopoverTitleProps} from './PopoverTitle.svelte';
export type {PopoverTriggerProps} from './PopoverTrigger.svelte';

export {
  createPopover,
  type CreatePopoverProps,
  type CreatePopoverReturn,
} from './createPopover.svelte.js';
export {
  getPopoverContext,
  setPopoverContext,
} from './PopoverContext.svelte.js';

export {anatomy as popoverAnatomy} from '@zag-js/popover';
