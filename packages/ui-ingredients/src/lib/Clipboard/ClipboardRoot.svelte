<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {setClipboardContext} from './ClipboardContext.svelte.js';
import type {
	CreateClipboardProps,
	CreateClipboardReturn,
} from './createClipboard.svelte.js';
import {createClipboard} from './createClipboard.svelte.js';

export interface ClipboardProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateClipboardReturn>,
		SetOptional<CreateClipboardProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ClipboardProps = $props();

let createClipboardPropKeys = defineKeyset<CreateClipboardProps>()([
	'id',
	'ids',
	'value',
	'defaultValue',
	'onValueChange',
	'onStatusChange',
	'timeout',
]);

let [createClipboardProps, localProps] = $derived(
	splitProps(props, createClipboardPropKeys),
);

let id = $props.id();
let clipboard = createClipboard(() => ({id, ...createClipboardProps}));
let mergedProps = $derived(mergeProps(clipboard().getRootProps(), localProps));

setClipboardContext(clipboard);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, clipboard)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(clipboard)}</div>
{/if}
