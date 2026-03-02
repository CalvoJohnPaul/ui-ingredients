<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerDayTableCellPropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerDayTableCellTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerDayTableCellTriggerProps = $props();

let datePicker = getDatePickerContext();
let tableCellProps = getDatePickerDayTableCellPropsContext();
let mergedProps = $derived(
	mergeProps(datePicker().getDayTableCellTriggerProps(tableCellProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
