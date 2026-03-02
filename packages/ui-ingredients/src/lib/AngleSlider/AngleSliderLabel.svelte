<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAngleSliderContext} from './AngleSliderContext.svelte.js';

export interface AngleSliderLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AngleSliderLabelProps = $props();

let angleSlider = getAngleSliderContext();
let mergedProps = $derived(mergeProps(angleSlider().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label {...mergedProps}>{@render children?.()}</label>
{/if}
