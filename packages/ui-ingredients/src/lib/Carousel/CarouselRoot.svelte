<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {setCarouselContext} from './CarouselContext.svelte.js';
import {
	createCarousel,
	type CreateCarouselProps,
	type CreateCarouselReturn,
} from './createCarousel.svelte.js';

export interface CarouselProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateCarouselReturn>,
		SetOptional<CreateCarouselProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CarouselProps = $props();

let createCarouselPropKeys = defineKeyset<CreateCarouselProps>()([
	'ids',
	'translations',
	'slidesPerPage',
	'autoSize',
	'slidesPerMove',
	'autoplay',
	'allowMouseDrag',
	'loop',
	'page',
	'defaultPage',
	'spacing',
	'padding',
	'onPageChange',
	'inViewThreshold',
	'snapType',
	'slideCount',
	'onDragStatusChange',
	'onAutoplayStatusChange',
	'id',
	'orientation',
]);

let [createCarouselProps, localProps] = $derived(
	splitProps(props, createCarouselPropKeys),
);

let id = $props.id();
let carousel = createCarousel(() => ({id, ...createCarouselProps}));
let mergedProps = $derived(mergeProps(carousel().getRootProps(), localProps));

setCarouselContext(carousel);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, carousel)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(carousel)}</div>
{/if}
