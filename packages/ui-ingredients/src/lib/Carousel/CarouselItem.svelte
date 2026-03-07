<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps} from '@zag-js/carousel';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getCarouselContext} from './CarouselContext.svelte.js';

export interface CarouselItemProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CarouselItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()(['index', 'snapAlign']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));
let carousel = getCarouselContext();
let mergedProps = $derived(
	mergeProps(carousel().getItemProps(itemProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
