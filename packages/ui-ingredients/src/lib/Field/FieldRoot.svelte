<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import type {
	CreateFieldProps,
	CreateFieldReturn,
} from './createField.svelte.js';
import {createField} from './createField.svelte.js';
import {setFieldContext} from './FieldContext.svelte.js';

export interface FieldProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateFieldReturn>,
		SetOptional<CreateFieldProps, 'id'>
	> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, children, ...props}: FieldProps = $props();

let createFieldPropKeys: UnionToTuple<keyof CreateFieldProps> = [
	'id',
	'ids',
	'invalid',
	'required',
	'disabled',
	'readOnly',
];

let [createFieldProps, localProps] = $derived(
	splitProps(props, createFieldPropKeys),
);

let id = $props.id();
let field = createField(() => ({id, ...createFieldProps}));
let mergedProps = $derived(mergeProps(field().getRootProps(), localProps));

setFieldContext(field);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, field)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(field)}</div>
{/if}
