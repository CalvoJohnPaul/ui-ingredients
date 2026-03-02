<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	getDatePickerViewPropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerViewTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerViewTriggerProps = $props();

let datePicker = getDatePickerContext();
let viewProps = getDatePickerViewPropsContext();
let mergedProps = $derived(
	mergeProps(datePicker().getViewTriggerProps(viewProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
