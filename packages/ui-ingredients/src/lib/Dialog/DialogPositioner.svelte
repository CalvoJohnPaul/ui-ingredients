<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import {getPresenceContext} from '../Presence/PresenceContext.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {getDialogContext} from './DialogContext.svelte.js';

export interface DialogPositionerProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DialogPositionerProps = $props();

let dialog = getDialogContext();
let presence = getPresenceContext();
let mergedProps = $derived(
	mergeProps(
		dialog().getPositionerProps(),
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
