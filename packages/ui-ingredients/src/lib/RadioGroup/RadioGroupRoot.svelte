<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createRadioGroup,
	type CreateRadioGroupProps,
	type CreateRadioGroupReturn,
} from './createRadioGroup.svelte.js';
import {setRadioGroupContext} from './RadioGroupContext.svelte.js';

export interface RadioGroupProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateRadioGroupReturn>,
		SetOptional<CreateRadioGroupProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: RadioGroupProps = $props();

let createRadioGroupPropKeys = defineKeyset<CreateRadioGroupProps>()([
	'ids',
	'value',
	'defaultValue',
	'name',
	'form',
	'disabled',
	'invalid',
	'required',
	'readOnly',
	'onValueChange',
	'orientation',
	'id',
]);

let [createRadioGroupProps, localProps] = $derived(
	splitProps(props, createRadioGroupPropKeys),
);

let id = $props.id();
let radioGroup = createRadioGroup(() => ({id, ...createRadioGroupProps}));
let mergedProps = $derived(mergeProps(radioGroup().getRootProps(), localProps));

setRadioGroupContext(radioGroup);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, radioGroup)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(radioGroup)}</div>
{/if}
