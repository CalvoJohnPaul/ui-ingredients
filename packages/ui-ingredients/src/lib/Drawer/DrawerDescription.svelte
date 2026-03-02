<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getDrawerContext} from './DrawerContext.svelte.js';

export interface DrawerDescriptionProps
	extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DrawerDescriptionProps = $props();

let drawer = getDrawerContext();
let mergedProps = $derived(mergeProps(drawer().getDescriptionProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<p bind:this={ref} {...mergedProps}>{@render children?.()}</p>
{/if}
