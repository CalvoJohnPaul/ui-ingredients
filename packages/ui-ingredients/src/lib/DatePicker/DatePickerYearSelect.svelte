<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getDatePickerContext} from './DatePickerContext.svelte.js';

export interface DatePickerYearSelectProps
	extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerYearSelectProps = $props();

let datePicker = getDatePickerContext();
let mergedProps = $derived(
	mergeProps(datePicker().getYearSelectProps(), props),
);

let cells = $derived(datePicker().getYears());
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
