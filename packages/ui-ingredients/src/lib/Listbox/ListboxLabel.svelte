<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getListboxContext} from './ListboxContext.svelte.js';

export interface ListboxLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ListboxLabelProps = $props();

let listbox = getListboxContext();
let mergedProps = $derived(mergeProps(listbox().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}>{@render children?.()}</label>
{/if}
