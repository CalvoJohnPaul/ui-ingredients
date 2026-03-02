<script lang="ts" module>
import type {ItemProps, ItemState} from '@zag-js/steps';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getStepsContext,
	setStepsItemPropsContext,
} from './StepsContext.svelte.js';

export interface StepsItemProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
		ItemProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	index,
	asChild,
	children,
	...props
}: StepsItemProps = $props();

let steps = getStepsContext();
let itemState = () => steps().getItemState({index});
let mergedProps = $derived(mergeProps(steps().getItemProps({index}), props));

setStepsItemPropsContext(() => ({index}));
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
