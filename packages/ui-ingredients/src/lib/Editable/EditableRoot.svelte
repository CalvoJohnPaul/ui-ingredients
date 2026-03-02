<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createEditable,
	type CreateEditableProps,
	type CreateEditableReturn,
} from './createEditable.svelte.js';
import {setEditableContext} from './EditableContext.svelte.js';

export interface EditableProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateEditableReturn>,
		SetOptional<CreateEditableProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: EditableProps = $props();

let createEditablePropKeys: UnionToTuple<keyof CreateEditableProps> = [
	'ids',
	'invalid',
	'name',
	'form',
	'autoResize',
	'activationMode',
	'submitMode',
	'selectOnFocus',
	'edit',
	'defaultEdit',
	'onEditChange',
	'maxLength',
	'disabled',
	'readOnly',
	'required',
	'placeholder',
	'translations',
	'finalFocusEl',
	'value',
	'defaultValue',
	'onValueChange',
	'onValueRevert',
	'onValueCommit',
	'id',
	'onPointerDownOutside',
	'onFocusOutside',
	'onInteractOutside',
];

let [createEditableProps, localProps] = $derived(
	splitProps(props, createEditablePropKeys),
);

let id = $props.id();
let editable = createEditable(() => ({id, ...createEditableProps}));
let mergedProps = $derived(mergeProps(editable().getRootProps(), localProps));

setEditableContext(editable);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, editable)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(editable)}</div>
{/if}
