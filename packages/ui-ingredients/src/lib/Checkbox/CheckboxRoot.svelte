<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {setCheckboxContext} from './CheckboxContext.svelte.js';
import type {
	CreateCheckboxProps,
	CreateCheckboxReturn,
} from './createCheckbox.svelte.js';
import {createCheckbox} from './createCheckbox.svelte.js';

export interface CheckboxProps
	extends Merge<
		HtmlIngredientProps<'label', HTMLLabelElement, CreateCheckboxReturn>,
		SetOptional<CreateCheckboxProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CheckboxProps = $props();

let createCheckboxPropKeys = defineKeyset<CreateCheckboxProps>()([
	'form',
	'id',
	'ids',
	'disabled',
	'invalid',
	'required',
	'checked',
	'defaultChecked',
	'readOnly',
	'onCheckedChange',
	'name',
	'value',
]);

let [createCheckboxProps, localProps] = $derived(
	splitProps(props, createCheckboxPropKeys),
);

let id = $props.id();
let checkbox = createCheckbox(() => ({id, ...createCheckboxProps}));
let mergedProps = $derived(mergeProps(checkbox().getRootProps(), localProps));

setCheckboxContext(checkbox);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, checkbox)}
{:else}
	<label bind:this={ref} {...mergedProps}>
		{@render children?.(checkbox)}
	</label>
{/if}


