<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {ItemProps} from '@zag-js/timer';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTimerContext,
	setTimerItemPropsContext,
} from './TimerContext.svelte.js';

export interface TimerItemProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TimerItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()(['type']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let timer = getTimerContext();
let mergedProps = $derived(
	mergeProps(timer().getItemProps(itemProps), localProps),
);

setTimerItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


