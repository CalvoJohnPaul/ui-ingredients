<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getComboboxContext} from './ComboboxContext.svelte.js';

export interface ComboboxInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: ComboboxInputProps = $props();

let combobox = getComboboxContext();
let mergedProps = $derived(mergeProps(combobox().getInputProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
