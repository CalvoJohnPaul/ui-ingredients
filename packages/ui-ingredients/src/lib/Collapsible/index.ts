export * as Collapsible from './Collapsible.js';

export type {CollapsibleContentProps} from './CollapsibleContent.svelte';
export type {CollapsibleProps} from './CollapsibleRoot.svelte';
export type {CollapsibleTriggerProps} from './CollapsibleTrigger.svelte';

export {
  getCollapsibleContext,
  setCollapsibleContext,
} from './CollapsibleContext.svelte.js';
export {
  createCollapsible,
  type CreateCollapsibleProps,
  type CreateCollapsibleReturn,
} from './createCollapsible.svelte.js';

export {anatomy as collapsibleAnatomy} from '@zag-js/collapsible';
