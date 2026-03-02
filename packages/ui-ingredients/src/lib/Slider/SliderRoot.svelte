<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createSlider,
	type CreateSliderProps,
	type CreateSliderReturn,
} from './createSlider.svelte.js';
import {setSliderContext} from './SliderContext.svelte.js';

export interface SliderProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateSliderReturn>,
		SetOptional<CreateSliderProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SliderProps = $props();

let createSliderPropKeys: UnionToTuple<keyof CreateSliderProps> = [
	'ids',
	'aria-label',
	'aria-labelledby',
	'name',
	'form',
	'value',
	'defaultValue',
	'disabled',
	'readOnly',
	'invalid',
	'onValueChange',
	'onValueChangeEnd',
	'onFocusChange',
	'getAriaValueText',
	'min',
	'max',
	'step',
	'minStepsBetweenThumbs',
	'orientation',
	'origin',
	'thumbAlignment',
	'thumbSize',
	'thumbCollisionBehavior',
	'id',
];

let [createSliderProps, localProps] = $derived(
	splitProps(props, createSliderPropKeys),
);

let id = $props.id();
let slider = createSlider(() => ({id, ...createSliderProps}));
let mergedProps = $derived(mergeProps(slider().getRootProps(), localProps));

setSliderContext(slider);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, slider)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(slider)}</div>
{/if}
