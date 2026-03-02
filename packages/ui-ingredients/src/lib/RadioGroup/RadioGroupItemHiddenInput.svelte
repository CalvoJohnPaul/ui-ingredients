<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getRadioGroupContext,
	getRadioGroupItemPropsContext,
} from './RadioGroupContext.svelte.js';

export interface RadioGroupItemHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: RadioGroupItemHiddenInputProps = $props();

let radioGroup = getRadioGroupContext();
let itemProps = getRadioGroupItemPropsContext();
let mergedProps = $derived(
	mergeProps(radioGroup().getItemHiddenInputProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
