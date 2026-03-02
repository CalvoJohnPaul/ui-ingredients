<script lang="ts" module>
import {getPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSelectContext} from './SelectContext.svelte.js';

export interface SelectContentProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SelectContentProps = $props();

let select = getSelectContext();
let presence = getPresenceContext();
let mergedProps = $derived(
	mergeProps(select().getContentProps(), presence().getPresenceProps(), props),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
