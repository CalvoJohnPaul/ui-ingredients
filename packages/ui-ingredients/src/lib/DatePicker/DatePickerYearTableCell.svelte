<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {TableCellProps, TableCellState} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	setDatePickerTableCellPropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerYearTableCellProps
	extends Merge<
		HtmlIngredientProps<'td', HTMLTableCellElement, TableCellState>,
		TableCellProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerYearTableCellProps = $props();

let datePicker = getDatePickerContext();

let tableCellPropKeys: UnionToTuple<keyof TableCellProps> = [
	'disabled',
	'value',
	'columns',
];

let [tableCellProps, localProps] = $derived(
	splitProps(props, tableCellPropKeys),
);

let tableCellState = () => datePicker().getYearTableCellState(tableCellProps);

let mergedProps = $derived(
	mergeProps(datePicker().getYearTableCellProps(tableCellProps), localProps),
);

setDatePickerTableCellPropsContext(() => tableCellProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, tableCellState)}
{:else}
	<td bind:this={ref} {...mergedProps}>{@render children?.(tableCellState)}</td>
{/if}
