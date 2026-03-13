<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	type CreateTagsInputProps,
	type CreateTagsInputReturn,
	createTagsInput,
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

let createTagsInputPropKeys = defineKeyset<CreateTagsInputProps>()([
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
	'allowDuplicates',
]);

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
