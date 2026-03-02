<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {PresetTriggerProps} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getDatePickerContext} from './DatePickerContext.svelte.js';

export interface DatePickerPresetTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		PresetTriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerPresetTriggerProps = $props();

let datePickerPresetTriggerPropKeys = defineKeyset<PresetTriggerProps>()([
	'value',
]);

let [datePickerPresetTriggerProps, localProps] = $derived(
	splitProps(props, datePickerPresetTriggerPropKeys),
);

let datePicker = getDatePickerContext();
let mergedProps = $derived(
	mergeProps(
		datePicker().getPresetTriggerProps(datePickerPresetTriggerProps),
		localProps,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}


