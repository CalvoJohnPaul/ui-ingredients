<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getRadioGroupContext,
	getRadioGroupItemPropsContext,
} from './RadioGroupContext.svelte.js';

export interface RadioGroupItemTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: RadioGroupItemTextProps = $props();

let radioGroup = getRadioGroupContext();
let itemProps = getRadioGroupItemPropsContext();
let mergedProps = $derived(
	mergeProps(radioGroup().getItemTextProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
