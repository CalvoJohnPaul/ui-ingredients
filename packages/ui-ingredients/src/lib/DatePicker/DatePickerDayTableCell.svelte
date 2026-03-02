<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {DayTableCellProps, DayTableCellState} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	setDatePickerDayTableCellPropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerDayTableCellProps
	extends Merge<
		HtmlIngredientProps<'td', HTMLTableCellElement, DayTableCellState>,
		DayTableCellProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerDayTableCellProps = $props();

let tableCellPropKeys = defineKeyset<DayTableCellProps>()([
	'value',
	'disabled',
	'visibleRange',
]);

let [tableCellProps, localProps] = $derived(
	splitProps(props, tableCellPropKeys),
);

let datePicker = getDatePickerContext();
let tableCellState = () => datePicker().getDayTableCellState(tableCellProps);
let mergedProps = $derived(
	mergeProps(datePicker().getDayTableCellProps(tableCellProps), localProps),
);

setDatePickerDayTableCellPropsContext(() => tableCellProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, tableCellState)}
{:else}
	<td bind:this={ref} {...mergedProps}>{@render children?.(tableCellState)}</td>
{/if}


