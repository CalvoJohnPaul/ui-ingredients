<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getHoverCardContext} from './HoverCardContext.svelte.js';

export interface HoverCardTriggerProps
	extends HtmlIngredientProps<'a', HTMLAnchorElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: HoverCardTriggerProps = $props();

let hoverCard = getHoverCardContext();
let mergedProps = $derived(mergeProps(hoverCard().getTriggerProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<a bind:this={ref} {...mergedProps}> {@render children?.()} </a>
{/if}
