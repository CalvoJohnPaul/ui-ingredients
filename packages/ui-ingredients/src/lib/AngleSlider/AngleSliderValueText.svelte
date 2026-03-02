<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAngleSliderContext} from './AngleSliderContext.svelte.js';

export interface AngleSliderValueTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AngleSliderValueTextProps = $props();

let angleSlider = getAngleSliderContext();
let mergedProps = $derived(
	mergeProps(angleSlider().getValueTextProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{angleSlider().valueAsDegree}
		{/if}
	</span>
{/if}
