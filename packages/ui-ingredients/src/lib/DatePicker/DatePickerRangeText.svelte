<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getDatePickerContext} from './DatePickerContext.svelte.js';

export interface DatePickerRangeTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerRangeTextProps = $props();

let datePicker = getDatePickerContext();
let mergedProps = $derived(mergeProps(datePicker().getRangeTextProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{datePicker().visibleRangeText.start}
		{/if}
	</span>
{/if}
