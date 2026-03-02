<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerTablePropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerTableHeaderProps
	extends HtmlIngredientProps<'th', HTMLTableCellElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerTableHeaderProps = $props();

let datePicker = getDatePickerContext();
let tableProps = getDatePickerTablePropsContext();
let mergedProps = $derived(
	mergeProps(datePicker().getTableHeaderProps(tableProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<th bind:this={ref} {...mergedProps}>{@render children?.()}</th>
{/if}
