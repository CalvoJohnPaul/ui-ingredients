<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSliderContext,
	getSliderThumbPropsContext,
} from './SliderContext.svelte.js';

export interface SliderHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: SliderHiddenInputProps = $props();

let slider = getSliderContext();
let thumbProps = getSliderThumbPropsContext();
let mergedProps = $derived(
	mergeProps(slider().getHiddenInputProps(thumbProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
