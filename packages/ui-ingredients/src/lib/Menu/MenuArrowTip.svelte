<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getMenuContext} from './MenuContext.svelte.js';

export interface MenuArrowTipProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: MenuArrowTipProps = $props();

let menu = getMenuContext();
let mergedProps = $derived(
	mergeProps(menu?.().getArrowTipProps() ?? {}, props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
