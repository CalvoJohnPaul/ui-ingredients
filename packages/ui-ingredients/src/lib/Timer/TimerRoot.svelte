<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createTimer,
	type CreateTimerProps,
	type CreateTimerReturn,
} from './createTimer.svelte.js';
import {setTimerContext} from './TimerContext.svelte.js';

export interface TimerProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateTimerReturn>,
		SetOptional<CreateTimerProps, 'id'>
	> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, children, ...props}: TimerProps = $props();

let createTimerPropKeys: UnionToTuple<keyof CreateTimerProps> = [
	'ids',
	'countdown',
	'startMs',
	'targetMs',
	'autoStart',
	'interval',
	'onTick',
	'onComplete',
	'id',
];

let [createTimerProps, localProps] = $derived(
	splitProps(props, createTimerPropKeys),
);

let id = $props.id();
let timer = createTimer(() => ({id, ...createTimerProps}));
let mergedProps = $derived(mergeProps(timer().getRootProps(), localProps));

setTimerContext(timer);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, timer)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(timer)}</div>
{/if}
