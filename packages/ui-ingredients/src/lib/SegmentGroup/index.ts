export * as SegmentGroup from './SegmentGroup.js';

export type {SegmentGroupIndicatorProps} from './SegmentGroupIndicator.svelte';
export type {SegmentGroupItemProps} from './SegmentGroupItem.svelte';
export type {SegmentGroupItemControlProps} from './SegmentGroupItemControl.svelte';
export type {SegmentGroupItemHiddenInputProps} from './SegmentGroupItemHiddenInput.svelte';
export type {SegmentGroupItemTextProps} from './SegmentGroupItemText.svelte';
export type {SegmentGroupLabelProps} from './SegmentGroupLabel.svelte';
export type {SegmentGroupProps} from './SegmentGroupRoot.svelte';

export {
  createSegmentGroup,
  type CreateSegmentGroupProps,
  type CreateSegmentGroupReturn,
} from './createSegmentGroup.svelte.js';
export {
  getSegmentGroupContext,
  setSegmentGroupContext,
} from './SegmentGroupContext.svelte.js';

export {anatomy as segmentGroupAnatomy} from './SegmentGroup.anatomy.js';
