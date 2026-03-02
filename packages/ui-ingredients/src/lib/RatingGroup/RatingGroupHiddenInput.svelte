<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getRatingGroupContext} from './RatingGroupContext.svelte.js';

export interface RatingGroupHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: RatingGroupHiddenInputProps = $props();

let radioGroup = getRatingGroupContext();
let mergedProps = $derived(
	mergeProps(radioGroup().getHiddenInputProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
