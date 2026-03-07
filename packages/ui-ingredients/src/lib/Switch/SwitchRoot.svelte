<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import type {
	CreateSwitchProps,
	CreateSwitchReturn,
} from './createSwitch.svelte.js';
import {createSwitch} from './createSwitch.svelte.js';
import {setSwitchContext} from './SwitchContext.svelte.js';

export interface SwitchProps
	extends Merge<
		HtmlIngredientProps<'label', HTMLLabelElement, CreateSwitchReturn>,
		SetOptional<CreateSwitchProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SwitchProps = $props();

let createSwitchPropKeys = defineKeyset<CreateSwitchProps>()([
	'id',
	'ids',
	'label',
	'disabled',
	'invalid',
	'required',
	'readOnly',
	'onCheckedChange',
	'checked',
	'defaultChecked',
	'name',
	'form',
	'value',
]);

let [createSwitchProps, localProps] = $derived(
	splitProps(props, createSwitchPropKeys),
);

let id = $props.id();
let switch_ = createSwitch(() => ({id, ...createSwitchProps}));
let mergedProps = $derived(mergeProps(switch_().getRootProps(), localProps));

setSwitchContext(switch_);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, switch_)}
{:else}
	<label bind:this={ref} {...mergedProps}>
		{@render children?.(switch_)}
	</label>
{/if}
