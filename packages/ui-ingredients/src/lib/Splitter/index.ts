export * as Splitter from './Splitter.js';

export type {SplitterPanelProps} from './SplitterPanel.svelte';
export type {SplitterResizeTriggerProps} from './SplitterResizeTrigger.svelte';
export type {SplitterProps} from './SplitterRoot.svelte';

export {
  createSplitter,
  type CreateSplitterProps,
  type CreateSplitterReturn,
} from './createSplitter.svelte.js';
export {
  getSplitterContext,
  setSplitterContext,
} from './SplitterContext.svelte.js';

export {anatomy as splitterAnatomy} from '@zag-js/splitter';
