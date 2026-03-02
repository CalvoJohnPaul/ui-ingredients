<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createSegmentGroup,
	type CreateSegmentGroupProps,
	type CreateSegmentGroupReturn,
} from './createSegmentGroup.svelte.js';
import {setSegmentGroupContext} from './SegmentGroupContext.svelte.js';

export interface SegmentGroupProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateSegmentGroupReturn>,
		SetOptional<CreateSegmentGroupProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SegmentGroupProps = $props();

let createSegmentGroupPropKeys = defineKeyset<CreateSegmentGroupProps>()([
	'ids',
	'value',
	'defaultValue',
	'name',
	'form',
	'disabled',
	'invalid',
	'required',
	'readOnly',
	'onValueChange',
	'orientation',
	'id',
]);

let [createSegmentGroupProps, localProps] = $derived(
	splitProps(props, createSegmentGroupPropKeys),
);

let id = $props.id();
let segmentGroup = createSegmentGroup(() => ({id, ...createSegmentGroupProps}));
let mergedProps = $derived(
	mergeProps(segmentGroup().getRootProps(), localProps),
);

setSegmentGroupContext(segmentGroup);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, segmentGroup)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(segmentGroup)}</div>
{/if}


