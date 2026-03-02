<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAngleSliderContext} from './AngleSliderContext.svelte.js';

export interface AngleSliderHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: AngleSliderHiddenInputProps = $props();

let angleSlider = getAngleSliderContext();
let mergedProps = $derived(
	mergeProps(angleSlider().getHiddenInputProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input {...mergedProps}>
{/if}
