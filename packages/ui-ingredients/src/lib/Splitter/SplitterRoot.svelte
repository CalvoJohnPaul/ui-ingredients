<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createSplitter,
	type CreateSplitterProps,
	type CreateSplitterReturn,
} from './createSplitter.svelte.js';
import {setSplitterContext} from './SplitterContext.svelte.js';

export interface SplitterProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateSplitterReturn>,
		SetOptional<CreateSplitterProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SplitterProps = $props();

let createSplitterPropKeys = defineKeyset<CreateSplitterProps>()([
	'id',
	'orientation',
	'size',
	'defaultSize',
	'panels',
	'onResize',
	'onResizeStart',
	'onResizeEnd',
	'ids',
	'keyboardResizeBy',
	'nonce',
	'onCollapse',
	'onExpand',
]);

let [createSplitterProps, localProps] = $derived(
	splitProps(props, createSplitterPropKeys),
);

let id = $props.id();
let splitter = createSplitter(() => ({id, ...createSplitterProps}));
let mergedProps = $derived(mergeProps(splitter().getRootProps(), localProps));

setSplitterContext(splitter);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, splitter)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(splitter)}</div>
{/if}


