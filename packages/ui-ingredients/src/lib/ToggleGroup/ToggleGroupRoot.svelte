<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import type {
	CreateToggleGroupProps,
	CreateToggleGroupReturn,
} from './createToggleGroup.svelte.js';
import {createToggleGroup} from './createToggleGroup.svelte.js';
import {setToggleGroupContext} from './ToggleGroupContext.svelte.js';

export interface ToggleGroupProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateToggleGroupReturn>,
		SetOptional<CreateToggleGroupProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ToggleGroupProps = $props();

let createToggleGroupPropKeys = defineKeyset<CreateToggleGroupProps>()([
	'id',
	'ids',
	'disabled',
	'value',
	'defaultValue',
	'onValueChange',
	'loopFocus',
	'rovingFocus',
	'orientation',
	'multiple',
	'deselectable',
]);

let [createToggleGroupProps, localProps] = $derived(
	splitProps(props, createToggleGroupPropKeys),
);

let id = $props.id();
let toggleGroup = createToggleGroup(() => ({id, ...createToggleGroupProps}));
let mergedProps = $derived(
	mergeProps(toggleGroup().getRootProps(), localProps),
);

setToggleGroupContext(toggleGroup);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, toggleGroup)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(toggleGroup)}</div>
{/if}


