<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getCheckboxContext} from './CheckboxContext.svelte.js';

export interface CheckboxLabelProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CheckboxLabelProps = $props();

let checkbox = getCheckboxContext();
let mergedProps = $derived(mergeProps(checkbox().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
