<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getCheckboxContext} from './CheckboxContext.svelte.js';

export interface CheckboxControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CheckboxControlProps = $props();

let checkbox = getCheckboxContext();
let mergedProps = $derived(mergeProps(checkbox().getControlProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
