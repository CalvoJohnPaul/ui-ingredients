export * as Accordion from './Accordion.js';

export type {AccordionItemProps} from './AccordionItem.svelte';
export type {AccordionItemContentProps} from './AccordionItemContent.svelte';
export type {AccordionIndicatorProps} from './AccordionItemIndicator.svelte';
export type {AccordionItemTriggerProps} from './AccordionItemTrigger.svelte';
export type {AccordionProps} from './AccordionRoot.svelte';

export {
  getAccordionContext,
  setAccordionContext,
} from './AccordionContext.svelte.js';
export {
  createAccordion,
  type CreateAccordionProps,
  type CreateAccordionReturn,
} from './createAccordion.svelte.js';

export {anatomy as accordionAnatomy} from '@zag-js/accordion';
