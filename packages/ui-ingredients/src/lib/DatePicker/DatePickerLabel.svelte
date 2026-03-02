<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {LabelProps} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getDatePickerContext} from './DatePickerContext.svelte.js';

export interface DatePickerLabelProps
	extends Merge<HtmlIngredientProps<'label', HTMLLabelElement>, LabelProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerLabelProps = $props();

let labelPropKeys = defineKeyset<LabelProps>()(['index']);
let [labelProps, localProps] = $derived(splitProps(props, labelPropKeys));
let datePicker = getDatePickerContext();
let mergedProps = $derived(
	mergeProps(datePicker().getLabelProps(labelProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}> {@render children?.()} </label>
{/if}


