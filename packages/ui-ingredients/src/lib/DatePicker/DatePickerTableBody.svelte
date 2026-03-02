<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerTablePropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerTableBodyProps
	extends HtmlIngredientProps<'tbody', HTMLTableSectionElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerTableBodyProps = $props();

let datePicker = getDatePickerContext();
let tableProps = getDatePickerTablePropsContext();
let mergedProps = $derived(
	mergeProps(datePicker().getTableBodyProps(tableProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<tbody bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</tbody>
{/if}
