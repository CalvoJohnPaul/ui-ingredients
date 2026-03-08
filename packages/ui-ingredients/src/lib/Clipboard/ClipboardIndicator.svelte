<script lang="ts" module>
import {dataAttr} from '@zag-js/dom-query';
import {mergeProps} from '@zag-js/svelte';
import {omit} from 'es-toolkit';
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
	mergeProps(
		omit(clipboard().getIndicatorProps(indicatorState()), ['hidden']),
		props,
		{'data-copied': dataAttr(clipboard().copied)},
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, indicatorState)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{@render children?.(indicatorState)}
	</span>
{/if}
