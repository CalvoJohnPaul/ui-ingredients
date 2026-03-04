<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '$lib/types.js';
import type {EdgeProps} from '@zag-js/marquee';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import {getMarqueeContext} from './MarqueeContext.svelte.js';

export interface MarqueeEdgeProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, EdgeProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: MarqueeEdgeProps = $props();

let edgePropKeys = defineKeyset<EdgeProps>()(['side']);
let [edgeProps, localProps] = $derived(splitProps(props, edgePropKeys));

let marquee = getMarqueeContext();
let mergedProps = $derived(
	mergeProps(marquee().getEdgeProps(edgeProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
