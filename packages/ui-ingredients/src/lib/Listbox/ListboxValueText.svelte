<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getListboxContext} from './ListboxContext.svelte.js';

export interface ListboxValueTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ListboxValueTextProps = $props();

let listbox = getListboxContext();
let mergedProps = $derived(mergeProps(listbox().getValueTextProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{listbox().valueAsString}
		{/if}
	</span>
{/if}
