export * as Timer from './Timer.js';

export type {TimerActionTriggerProps} from './TimerActionTrigger.svelte';
export type {TimerAreaProps} from './TimerArea.svelte';
export type {TimerControlProps} from './TimerControl.svelte';
export type {TimerItemProps} from './TimerItem.svelte';
export type {TimerItemLabelProps} from './TimerItemLabel.svelte';
export type {TimerItemValueProps} from './TimerItemValue.svelte';
export type {TimerProps} from './TimerRoot.svelte';
export type {TimerSeparatorProps} from './TimerSeparator.svelte';

export {
  createTimer,
  type CreateTimerProps,
  type CreateTimerReturn,
} from './createTimer.svelte.js';
export {getTimerContext, setTimerContext} from './TimerContext.svelte.js';

export {anatomy as timerAnatomy} from '@zag-js/timer';
