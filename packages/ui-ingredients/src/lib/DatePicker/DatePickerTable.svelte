<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {TableProps} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerViewPropsContext,
	setDatePickerTablePropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerTableProps
	extends Merge<
		HtmlIngredientProps<'table', HTMLTableElement>,
		Omit<TableProps, 'view'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerTableProps = $props();

let tablePropKeys: UnionToTuple<keyof Omit<TableProps, 'view'>> = [
	'columns',
	'id',
];

let [tableProps, localProps] = $derived(splitProps(props, tablePropKeys));

let datePicker = getDatePickerContext();
let viewProps = getDatePickerViewPropsContext();
let mergedProps = $derived(
	mergeProps(
		datePicker().getTableProps({...tableProps, ...viewProps()}),
		localProps,
	),
);

setDatePickerTablePropsContext(() => tableProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<table bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</table>
{/if}
