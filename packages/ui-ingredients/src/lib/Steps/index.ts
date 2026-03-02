export * as Steps from './Steps.js';

export type {StepsCompletedContentProps} from './StepsCompletedContent.svelte';
export type {StepsContentProps} from './StepsContent.svelte';
export type {StepsIndicatorProps} from './StepsIndicator.svelte';
export type {StepsItemProps} from './StepsItem.svelte';
export type {StepsListProps} from './StepsList.svelte';
export type {StepsNextTriggerProps} from './StepsNextTrigger.svelte';
export type {StepsPrevTriggerProps} from './StepsPrevTrigger.svelte';
export type {StepsProgressProps} from './StepsProgress.svelte';
export type {StepsProps} from './StepsRoot.svelte';
export type {StepsSeparatorProps} from './StepsSeparator.svelte';
export type {StepsTriggerProps} from './StepsTrigger.svelte';

export {
  createSteps,
  type CreateStepsProps,
  type CreateStepsReturn,
} from './createSteps.svelte.js';
export {getStepsContext, setStepsContext} from './StepsContext.svelte.js';

export {anatomy as stepsAnatomy} from '@zag-js/steps';
