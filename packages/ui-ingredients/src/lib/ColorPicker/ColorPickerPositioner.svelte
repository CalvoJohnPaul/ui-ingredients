<script lang="ts" module>
import {getPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerPositionerProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerPositionerProps = $props();

let colorPicker = getColorPickerContext();
let presence = getPresenceContext();
let mergedProps = $derived(
	mergeProps(
		colorPicker().getPositionerProps(),
		presence().getPresenceProps(),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
