<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSwitchContext} from './SwitchContext.svelte.js';

export interface SwitchHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: SwitchHiddenInputProps = $props();

let switch_ = getSwitchContext();
let mergedProps = $derived(mergeProps(switch_().getHiddenInputProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
