<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '$lib/types.js';
import type {ContentProps} from '@zag-js/marquee';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import {getMarqueeContext} from './MarqueeContext.svelte.js';

export interface MarqueeContentProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ContentProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: MarqueeContentProps = $props();

let contentPropKeys = defineKeyset<ContentProps>()(['index']);
let [contentProps, localProps] = $derived(splitProps(props, contentPropKeys));

let marquee = getMarqueeContext();
let mergedProps = $derived(
	mergeProps(marquee().getContentProps(contentProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
