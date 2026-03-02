<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createListbox,
	type CreateListboxProps,
	type CreateListboxReturn,
} from './createListbox.svelte.js';
import {setListboxContext} from './ListboxContext.svelte.js';

export interface ListboxProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateListboxReturn>,
		SetOptional<CreateListboxProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ListboxProps = $props();

let createListboxPropKeys = defineKeyset<CreateListboxProps>()([
	'orientation',
	'collection',
	'ids',
	'disabled',
	'disallowSelectAll',
	'onHighlightChange',
	'onValueChange',
	'value',
	'defaultValue',
	'highlightedValue',
	'defaultHighlightedValue',
	'loopFocus',
	'selectionMode',
	'scrollToIndexFn',
	'selectOnHighlight',
	'deselectable',
	'typeahead',
	'onSelect',
	'id',
]);

let [createListboxProps, localProps] = $derived(
	splitProps(props, createListboxPropKeys),
);

let id = $props.id();
let listbox = createListbox(() => ({id, ...createListboxProps}));
let mergedProps = $derived(mergeProps(listbox().getRootProps(), localProps));

setListboxContext(listbox);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, listbox)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(listbox)}</div>
{/if}


