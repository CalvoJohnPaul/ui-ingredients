export * as Tooltip from './Tooltip.js';

export type {TooltipArrowProps} from './TooltipArrow.svelte';
export type {TooltipArrowTipProps} from './TooltipArrowTip.svelte';
export type {TooltipContentProps} from './TooltipContent.svelte';
export type {TooltipPositionerProps} from './TooltipPositioner.svelte';
export type {TooltipProps} from './TooltipRoot.svelte';
export type {TooltipTriggerProps} from './TooltipTrigger.svelte';

export {
  createTooltip,
  type CreateTooltipProps,
  type CreateTooltipReturn,
} from './createTooltip.svelte.js';
export {
  getTooltipContext,
  setTooltipContext,
} from './TooltipContext.svelte.js';

export {anatomy as tooltipAnatomy} from '@zag-js/tooltip';
