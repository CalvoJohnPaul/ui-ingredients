<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getFloatingPanelContext} from './FloatingPanelContext.svelte.js';

export interface FloatingPanelControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FloatingPanelControlProps = $props();

let floatingPanel = getFloatingPanelContext();
let mergedProps = $derived(
	mergeProps(floatingPanel().getControlProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
