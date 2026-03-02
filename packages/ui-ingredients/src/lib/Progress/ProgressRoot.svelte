<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createProgress,
	type CreateProgressProps,
	type CreateProgressReturn,
} from './createProgress.svelte.js';
import {setProgressContext} from './ProgressContext.svelte.js';

export interface ProgressProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateProgressReturn>,
		SetOptional<CreateProgressProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ProgressProps = $props();

let createProgressPropKeys = defineKeyset<CreateProgressProps>()([
	'ids',
	'value',
	'defaultValue',
	'min',
	'max',
	'translations',
	'onValueChange',
	'formatOptions',
	'locale',
	'id',
	'orientation',
]);

let [createProgressProps, localProps] = $derived(
	splitProps(props, createProgressPropKeys),
);

let id = $props.id();
let progress = createProgress(() => ({id, ...createProgressProps}));
let mergedProps = $derived(mergeProps(progress().getRootProps(), localProps));

setProgressContext(progress);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, progress)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(progress)}</div>
{/if}


