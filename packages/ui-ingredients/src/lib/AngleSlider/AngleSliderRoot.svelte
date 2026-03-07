<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {setAngleSliderContext} from './AngleSliderContext.svelte.js';
import {
	createAngleSlider,
	type CreateAngleSliderProps,
	type CreateAngleSliderReturn,
} from './createAngleSlider.svelte.js';

export interface AngleSliderProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateAngleSliderReturn>,
		SetOptional<CreateAngleSliderProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AngleSliderProps = $props();

let createAngleSliderPropKeys = defineKeyset<CreateAngleSliderProps>()([
	'id',
	'aria-label',
	'aria-labelledby',
	'ids',
	'step',
	'value',
	'defaultValue',
	'onValueChange',
	'onValueChangeEnd',
	'disabled',
	'readOnly',
	'invalid',
	'name',
]);

let [createAngleSliderProps, localProps] = $derived(
	splitProps(props, createAngleSliderPropKeys),
);

let id = $props.id();
let angleSlider = createAngleSlider(() => ({id, ...createAngleSliderProps}));
let mergedProps = $derived(
	mergeProps(angleSlider().getRootProps(), localProps),
);

setAngleSliderContext(angleSlider);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, angleSlider)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(angleSlider)}</div>
{/if}
