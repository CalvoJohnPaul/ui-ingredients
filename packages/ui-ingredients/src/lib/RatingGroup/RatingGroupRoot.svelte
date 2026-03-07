<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createRatingGroup,
	type CreateRatingGroupProps,
	type CreateRatingGroupReturn,
} from './createRatingGroup.svelte.js';
import {setRatingGroupContext} from './RatingGroupContext.svelte.js';

export interface RatingGroupProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateRatingGroupReturn>,
		SetOptional<CreateRatingGroupProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: RatingGroupProps = $props();

let createRatingGroupPropKeys = defineKeyset<CreateRatingGroupProps>()([
	'ids',
	'translations',
	'count',
	'name',
	'form',
	'value',
	'defaultValue',
	'readOnly',
	'disabled',
	'required',
	'allowHalf',
	'autoFocus',
	'onValueChange',
	'onHoverChange',
	'id',
]);

let [createRatingGroupProps, localProps] = $derived(
	splitProps(props, createRatingGroupPropKeys),
);

let id = $props.id();
let ratingGroup = createRatingGroup(() => ({id, ...createRatingGroupProps}));
let mergedProps = $derived(
	mergeProps(ratingGroup().getRootProps(), localProps),
);

setRatingGroupContext(ratingGroup);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, ratingGroup)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(ratingGroup)}</div>
{/if}
