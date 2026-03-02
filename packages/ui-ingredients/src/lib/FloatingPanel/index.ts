export * as FloatingPanel from './FloatingPanel.js';

export type {FloatingPanelBodyProps} from './FloatingPanelBody.svelte';
export type {FloatingPanelCloseTriggerProps} from './FloatingPanelCloseTrigger.svelte';
export type {FloatingPanelContentProps} from './FloatingPanelContent.svelte';
export type {FloatingPanelControlProps} from './FloatingPanelControl.svelte';
export type {FloatingPanelDragTriggerProps} from './FloatingPanelDragTrigger.svelte';
export type {FloatingPanelHeaderProps} from './FloatingPanelHeader.svelte';
export type {FloatingPanelPositionerProps} from './FloatingPanelPositioner.svelte';
export type {FloatingPanelResizeTriggerProps} from './FloatingPanelResizeTrigger.svelte';
export type {FloatingPanelProps} from './FloatingPanelRoot.svelte';
export type {FloatingPanelStageTriggerProps} from './FloatingPanelStageTrigger.svelte';
export type {FloatingPanelTitleProps} from './FloatingPanelTitle.svelte';
export type {FloatingPanelTriggerProps} from './FloatingPanelTrigger.svelte';

export {
  createFloatingPanel,
  type CreateFloatingPanelProps,
  type CreateFloatingPanelReturn,
} from './createFloatingPanel.svelte.js';
export {
  getFloatingPanelContext,
  setFloatingPanelContext,
} from './FloatingPanelContext.svelte.js';

export {anatomy as floatingPanelAnatomy} from '@zag-js/floating-panel';
