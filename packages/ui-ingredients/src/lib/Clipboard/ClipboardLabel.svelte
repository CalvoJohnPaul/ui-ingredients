<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getClipboardContext} from './ClipboardContext.svelte.js';

export interface ClipboardLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ClipboardLabelProps = $props();

let clipboard = getClipboardContext();
let mergedProps = $derived(mergeProps(clipboard().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}> {@render children?.()} </label>
{/if}
