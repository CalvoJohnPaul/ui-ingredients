<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {ViewProps} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getDatePickerContext,
	setDatePickerViewPropsContext,
} from './DatePickerContext.svelte.js';

export interface DatePickerViewProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ViewProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerViewProps = $props();

let viewPropKeys = defineKeyset<ViewProps>()(['view']);
let [viewProps, localProps] = $derived(splitProps(props, viewPropKeys));
let datePicker = getDatePickerContext();
let mergedProps = $derived(
	mergeProps(datePicker().getViewProps(viewProps), localProps),
);

setDatePickerViewPropsContext(() => viewProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


