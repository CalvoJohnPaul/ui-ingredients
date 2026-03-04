<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '$lib/types.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {
	createScrollArea,
	type CreateScrollAreaProps,
	type CreateScrollAreaReturn,
} from './createScrollArea.svelte.js';
import {setScrollAreaContext} from './ScrollAreaContext.svelte.js';

export interface ScrollAreaRootProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateScrollAreaReturn>,
		SetOptional<CreateScrollAreaProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: ScrollAreaRootProps = $props();

let createScrollAreaPropKeys = defineKeyset<CreateScrollAreaProps>()([
	'id',
	'ids',
]);

let [createScrollAreaProps, localProps] = $derived(
	splitProps(props, createScrollAreaPropKeys),
);

let id = $props.id();
let scrollArea = createScrollArea(() => ({id, ...createScrollAreaProps}));
let mergedProps = $derived(mergeProps(scrollArea().getRootProps(), localProps));

setScrollAreaContext(scrollArea);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, scrollArea)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(scrollArea)}</div>
{/if}
