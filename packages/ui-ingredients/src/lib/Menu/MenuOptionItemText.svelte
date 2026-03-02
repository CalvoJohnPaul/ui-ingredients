<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getMenuContext,
	getMenuOptionItemPropsContext,
} from './MenuContext.svelte.js';

export interface MenuOptionItemTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: MenuOptionItemTextProps = $props();

let menu = getMenuContext();
let itemProps = getMenuOptionItemPropsContext();
let mergedProps = $derived(
	mergeProps(menu?.().getItemTextProps(itemProps()) ?? {}, props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{itemProps().valueText}
		{/if}
	</span>
{/if}
