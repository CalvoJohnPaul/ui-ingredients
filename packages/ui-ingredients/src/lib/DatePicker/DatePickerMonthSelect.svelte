<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {MonthFormatOptions} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getDatePickerContext} from './DatePickerContext.svelte.js';

export interface DatePickerMonthSelectProps
	extends Merge<
		HtmlIngredientProps<'select', HTMLSelectElement>,
		MonthFormatOptions
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerMonthSelectProps = $props();

let monthFormatOptionKeys = defineKeyset<MonthFormatOptions>()(['format']);
let [monthFormatOptions, localProps] = $derived(
	splitProps(props, monthFormatOptionKeys),
);
let datePicker = getDatePickerContext();
let mergedProps = $derived(
	mergeProps(datePicker().getMonthSelectProps(), localProps),
);

let cells = $derived(datePicker().getMonths(monthFormatOptions));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<select bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{#each cells as cell}
				<option value={cell.value}>{cell.label}</option>
			{/each}
		{/if}
	</select>
{/if}


