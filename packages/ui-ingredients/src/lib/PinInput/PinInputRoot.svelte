<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import type {
	CreatePinInputProps,
	CreatePinInputReturn,
} from './createPinInput.svelte.js';
import {createPinInputContext} from './createPinInput.svelte.js';
import {setPinInputContext} from './PinInputContext.svelte.js';

export interface PinInputProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreatePinInputReturn>,
		SetOptional<CreatePinInputProps, 'id'>
	> {}
</script>

<script lang="ts">
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';

let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PinInputProps = $props();

let createPinInputPropKeys = defineKeyset<CreatePinInputProps>()([
	'autoFocus',
	'autoSubmit',
	'blurOnComplete',
	'count',
	'defaultValue',
	'disabled',
	'form',
	'id',
	'ids',
	'invalid',
	'mask',
	'name',
	'onValueChange',
	'onValueComplete',
	'onValueInvalid',
	'otp',
	'pattern',
	'placeholder',
	'readOnly',
	'required',
	'sanitizeValue',
	'selectOnFocus',
	'translations',
	'type',
	'value'
]);

let [createPinInputProps, localProps] = $derived(
	splitProps(props, createPinInputPropKeys),
);

let id = $props.id();
let pinInput = createPinInputContext(() => ({id, ...createPinInputProps}));
let mergedProps = $derived(mergeProps(pinInput().getRootProps(), localProps));

setPinInputContext(pinInput);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, pinInput)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(pinInput)}</div>
{/if}
