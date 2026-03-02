<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getMenuTriggerItemContext} from './MenuContext.svelte.js';

export interface MenuTriggerItemIndicatorProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: MenuTriggerItemIndicatorProps = $props();

let menuTriggerItemProps = getMenuTriggerItemContext();
let mergedProps = $derived(mergeProps(menuTriggerItemProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
