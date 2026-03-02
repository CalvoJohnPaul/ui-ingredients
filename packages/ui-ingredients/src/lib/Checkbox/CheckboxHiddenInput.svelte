<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getCheckboxContext} from './CheckboxContext.svelte.js';

export interface CheckboxHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: CheckboxHiddenInputProps = $props();

let checkbox = getCheckboxContext();
let mergedProps = $derived(mergeProps(checkbox().getHiddenInputProps(), props));
</script>

{#if asChild}
	{@render asChild(() =>mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
