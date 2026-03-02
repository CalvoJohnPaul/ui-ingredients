<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getMenuContext} from './MenuContext.svelte.js';

export interface MenuSeparatorProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: MenuSeparatorProps = $props();

let menu = getMenuContext();
let mergedProps = $derived(
	mergeProps(menu?.().getSeparatorProps() ?? {}, props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
