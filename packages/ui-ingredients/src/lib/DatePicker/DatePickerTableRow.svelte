<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerTablePropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerTableRowProps
	extends HtmlIngredientProps<'tr', HTMLTableRowElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerTableRowProps = $props();

let datePicker = getDatePickerContext();
let tableProps = getDatePickerTablePropsContext();
let mergedProps = $derived(
	mergeProps(datePicker().getTableRowProps(tableProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<tr bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</tr>
{/if}
