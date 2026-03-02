<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createNumberInput,
	type CreateNumberInputProps,
	type CreateNumberInputReturn,
} from './createNumberInput.svelte.js';
import {setNumberInputContext} from './NumberInputContext.svelte.js';

export interface NumberInputProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateNumberInputReturn>,
		SetOptional<CreateNumberInputProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: NumberInputProps = $props();

let createNumberInputPropKeys: UnionToTuple<keyof CreateNumberInputProps> = [
	'ids',
	'name',
	'form',
	'disabled',
	'readOnly',
	'invalid',
	'required',
	'pattern',
	'value',
	'defaultValue',
	'min',
	'max',
	'step',
	'allowMouseWheel',
	'allowOverflow',
	'clampValueOnBlur',
	'focusInputOnChange',
	'translations',
	'formatOptions',
	'inputMode',
	'onValueChange',
	'onValueInvalid',
	'onFocusChange',
	'onValueCommit',
	'spinOnPress',
	'locale',
	'id',
];

let [createNumberInputProps, localProps] = $derived(
	splitProps(props, createNumberInputPropKeys),
);

let id = $props.id();
let numberInput = createNumberInput(() => ({id, ...createNumberInputProps}));
let mergedProps = $derived(
	mergeProps(numberInput().getRootProps(), localProps),
);

setNumberInputContext(numberInput);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, numberInput)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(numberInput)}</div>
{/if}
