<script lang="ts" module>
import {getPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getFloatingPanelContext} from './FloatingPanelContext.svelte.js';

export interface FloatingPanelPositionerProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FloatingPanelPositionerProps = $props();

let floatingPanel = getFloatingPanelContext();
let presence = getPresenceContext();
let mergedProps = $derived(
	mergeProps(
		floatingPanel().getPositionerProps(),
		presence().getPresenceProps(),
		props,
	),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
