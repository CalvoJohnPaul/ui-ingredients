<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createSignaturePad,
	type CreateSignaturePadProps,
	type CreateSignaturePadReturn,
} from './createSignaturePad.svelte.js';

export interface SignaturePadProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateSignaturePadReturn>,
		SetOptional<CreateSignaturePadProps, 'id'>
	> {}
</script>

<script lang="ts">
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import {setSignaturePadContext} from './SignaturePadContext.svelte.js';

let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SignaturePadProps = $props();

let createSignaturePadPropKeys = defineKeyset<CreateSignaturePadProps>()([
	'ids',
	'translations',
	'onDraw',
	'onDrawEnd',
	'drawing',
	'disabled',
	'required',
	'readOnly',
	'name',
	'defaultPaths',
	'paths',
	'id',
]);

let [createSignaturePadProps, localProps] = $derived(
	splitProps(props, createSignaturePadPropKeys),
);

let id = $props.id();
let signaturePad = createSignaturePad(() => ({id, ...createSignaturePadProps}));
let mergedProps = $derived(
	mergeProps(signaturePad().getRootProps(), localProps),
);

setSignaturePadContext(signaturePad);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, signaturePad)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(signaturePad)}</div>
{/if}
