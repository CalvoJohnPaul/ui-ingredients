<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getNumberInputContext} from './NumberInputContext.svelte.js';

export interface NumberInputDecrementTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: NumberInputDecrementTriggerProps = $props();

let numberInput = getNumberInputContext();
let mergedProps = $derived(
	mergeProps(numberInput().getDecrementTriggerProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
