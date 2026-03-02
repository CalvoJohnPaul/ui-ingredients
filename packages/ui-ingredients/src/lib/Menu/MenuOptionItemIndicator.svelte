<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getMenuContext,
	getMenuOptionItemPropsContext,
} from './MenuContext.svelte.js';

export interface MenuOptionItemIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: MenuOptionItemIndicatorProps = $props();

let menu = getMenuContext();
let itemProps = getMenuOptionItemPropsContext();
let mergedProps = $derived(
	mergeProps(menu?.().getItemIndicatorProps(itemProps()) ?? {}, props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>{@render children?.()}</span>
{/if}
