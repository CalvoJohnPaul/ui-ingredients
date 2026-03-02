<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAngleSliderContext} from './AngleSliderContext.svelte.js';

export interface AngleSliderMarkerGroupProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AngleSliderMarkerGroupProps = $props();

let angleSlider = getAngleSliderContext();
let mergedProps = $derived(
	mergeProps(angleSlider().getMarkerGroupProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div {...mergedProps}>{@render children?.()}</div>
{/if}
