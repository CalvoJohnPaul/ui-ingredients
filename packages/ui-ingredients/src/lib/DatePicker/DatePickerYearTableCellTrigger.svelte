<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerTableCellPropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerYearTableCellTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerYearTableCellTriggerProps = $props();

let datePicker = getDatePickerContext();
let tableCellProps = getDatePickerTableCellPropsContext();
let mergedProps = $derived(
	mergeProps(
		datePicker().getYearTableCellTriggerProps(tableCellProps()),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
