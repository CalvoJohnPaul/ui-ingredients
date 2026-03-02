<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getClipboardContext} from './ClipboardContext.svelte.js';

interface IndicatorState {
	copied: boolean;
}

export interface ClipboardIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement, IndicatorState> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ClipboardIndicatorProps = $props();

let clipboard = getClipboardContext();
let indicatorState = (): IndicatorState => ({copied: clipboard().copied});
let mergedProps = $derived(
	mergeProps(clipboard().getIndicatorProps(indicatorState()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, indicatorState)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{@render children?.(indicatorState)}
	</span>
{/if}
