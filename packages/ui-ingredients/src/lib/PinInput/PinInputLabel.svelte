<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getPinInputContext} from './PinInputContext.svelte.js';

export interface PinInputLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PinInputLabelProps = $props();

let pinInput = getPinInputContext();
let mergedProps = $derived(mergeProps(pinInput().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}> {@render children?.()} </label>
{/if}
