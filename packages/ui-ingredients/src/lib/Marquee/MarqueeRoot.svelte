<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '$lib/types.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {
	createMarquee,
	type CreateMarqueeProps,
	type CreateMarqueeReturn,
} from './createMarquee.svelte.js';
import {setMarqueeContext} from './MarqueeContext.svelte.js';

export interface MarqueeRootProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateMarqueeReturn>,
		SetOptional<CreateMarqueeProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: MarqueeRootProps = $props();

let createMarqueePropKeys = defineKeyset<CreateMarqueeProps>()([
	'autoFill',
	'defaultPaused',
	'delay',
	'id',
	'ids',
	'loopCount',
	'onComplete',
	'onLoopComplete',
	'onPauseChange',
	'pauseOnInteraction',
	'paused',
	'reverse',
	'side',
	'spacing',
	'speed',
	'translations',
]);

let [createMarqueeProps, localProps] = $derived(
	splitProps(props, createMarqueePropKeys),
);

let id = $props.id();
let marquee = createMarquee(() => ({id, ...createMarqueeProps}));

let mergedProps = $derived(mergeProps(marquee().getRootProps(), localProps));

setMarqueeContext(marquee);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, marquee)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(marquee)}</div>
{/if}
