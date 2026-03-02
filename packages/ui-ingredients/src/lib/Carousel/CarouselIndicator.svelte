<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {IndicatorProps} from '@zag-js/carousel';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getCarouselContext} from './CarouselContext.svelte.js';

export interface CarouselIndicatorProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		IndicatorProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CarouselIndicatorProps = $props();

let indicatorPropKeys: UnionToTuple<keyof IndicatorProps> = [
	'index',
	'readOnly',
];

let [indicatorProps, localProps] = $derived(
	splitProps(props, indicatorPropKeys),
);

let carousel = getCarouselContext();
let mergedProps = $derived(
	mergeProps(carousel().getIndicatorProps(indicatorProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
