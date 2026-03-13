<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	type CreateTimerProps,
	type CreateTimerReturn,
	createTimer,
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

let createTimerPropKeys = defineKeyset<CreateTimerProps>()([
	'ids',
	'countdown',
	'startMs',
	'targetMs',
	'autoStart',
	'interval',
	'onTick',
	'onComplete',
	'id',
	'translations',
]);

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
