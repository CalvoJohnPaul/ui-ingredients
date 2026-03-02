<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getCheckboxContext} from './CheckboxContext.svelte.js';

export interface CheckboxIndicatorProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CheckboxIndicatorProps = $props();

let checkbox = getCheckboxContext();
let mergedProps = $derived(mergeProps(checkbox().getIndicatorProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
