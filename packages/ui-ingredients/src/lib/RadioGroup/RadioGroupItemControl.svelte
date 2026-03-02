<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getRadioGroupContext,
	getRadioGroupItemPropsContext,
} from './RadioGroupContext.svelte.js';

export interface RadioGroupItemControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: RadioGroupItemControlProps = $props();

let radioGroup = getRadioGroupContext();
let itemProps = getRadioGroupItemPropsContext();
let mergedProps = $derived(
	mergeProps(radioGroup().getItemControlProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
