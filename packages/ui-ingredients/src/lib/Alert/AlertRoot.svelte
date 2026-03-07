<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {setAlertContext} from './AlertContext.svelte.js';
import {
	type CreateAlertProps,
	type CreateAlertReturn,
	createAlert,
} from './createAlert.svelte.js';

export interface AlertProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateAlertReturn>,
		SetOptional<CreateAlertProps, 'id'>
	> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, children, ...props}: AlertProps = $props();

let createAlertPropKeys = defineKeyset<CreateAlertProps>()(['id', 'ids']);
let [createAlertProps, localProps] = $derived(
	splitProps(props, createAlertPropKeys),
);

let id = $props.id();
let alert = createAlert(() => ({id, ...createAlertProps}));
let mergedProps = $derived(mergeProps(alert().getRootProps(), localProps));

setAlertContext(alert);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, alert)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(alert)}</div>
{/if}
