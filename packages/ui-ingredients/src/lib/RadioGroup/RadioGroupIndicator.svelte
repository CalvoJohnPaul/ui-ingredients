<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getRadioGroupContext} from './RadioGroupContext.svelte.js';

export interface RadioGroupIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: RadioGroupIndicatorProps = $props();

let radioGroup = getRadioGroupContext();
let mergedProps = $derived(mergeProps(radioGroup().getIndicatorProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
