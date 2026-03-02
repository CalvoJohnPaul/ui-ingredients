<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSliderContext} from './SliderContext.svelte.js';

export interface SliderValueTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SliderValueTextProps = $props();

let slider = getSliderContext();
let mergedProps = $derived(mergeProps(slider().getValueTextProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{slider().value.join(', ')}
		{/if}
	</span>
{/if}
