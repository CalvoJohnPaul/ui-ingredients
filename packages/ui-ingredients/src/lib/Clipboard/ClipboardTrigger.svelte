<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getClipboardContext} from './ClipboardContext.svelte.js';

export interface ClipboardTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ClipboardTriggerProps = $props();

let clipboard = getClipboardContext();
let mergedProps = $derived(mergeProps(clipboard().getTriggerProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
