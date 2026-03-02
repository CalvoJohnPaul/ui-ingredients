<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerViewPropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerViewControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerViewControlProps = $props();

let datePicker = getDatePickerContext();
let viewProps = getDatePickerViewPropsContext();
let mergedProps = $derived(
	mergeProps(datePicker().getViewControlProps(viewProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
