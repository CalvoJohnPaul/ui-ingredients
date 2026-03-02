<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getClipboardContext} from './ClipboardContext.svelte.js';

export interface ClipboardInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: ClipboardInputProps = $props();

let clipboard = getClipboardContext();
let mergedProps = $derived(mergeProps(clipboard().getInputProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
