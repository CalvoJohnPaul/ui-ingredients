<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createTagsInput,
	type CreateTagsInputProps,
	type CreateTagsInputReturn,
} from './createTagsInput.svelte.js';
import {setTagsInputContext} from './TagsInputContext.svelte.js';

export interface TagsInputProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateTagsInputReturn>,
		SetOptional<CreateTagsInputProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TagsInputProps = $props();

let createTagsInputPropKeys: UnionToTuple<keyof CreateTagsInputProps> = [
	'ids',
	'translations',
	'maxLength',
	'delimiter',
	'autoFocus',
	'disabled',
	'readOnly',
	'invalid',
	'required',
	'editable',
	'inputValue',
	'defaultInputValue',
	'value',
	'defaultValue',
	'onValueChange',
	'onInputValueChange',
	'onHighlightChange',
	'onValueInvalid',
	'validate',
	'blurBehavior',
	'addOnPaste',
	'max',
	'allowOverflow',
	'name',
	'form',
	'placeholder',
	'id',
	'onPointerDownOutside',
	'onFocusOutside',
	'onInteractOutside',
];

let [createTagsInputProps, localProps] = $derived(
	splitProps(props, createTagsInputPropKeys),
);

let id = $props.id();
let tagsInput = createTagsInput(() => ({id, ...createTagsInputProps}));
let mergedProps = $derived(mergeProps(tagsInput().getRootProps(), localProps));

setTagsInputContext(tagsInput);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, tagsInput)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(tagsInput)}</div>
{/if}
