<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	createDatePicker,
	type CreateDatePickerProps,
	type CreateDatePickerReturn,
} from './createDatePicker.svelte.js';
import {setDatePickerContext} from './DatePickerContext.svelte.js';

export interface DatePickerProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateDatePickerReturn>,
			SetOptional<CreateDatePickerProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DatePickerProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, datePickerProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let createDatePickerPropKeys = defineKeyset<CreateDatePickerProps>()([
	'id',
	'ids',
	'inline',
	'invalid',
	'isDateUnavailable',
	'locale',
	'max',
	'maxSelectedDates',
	'maxView',
	'min',
	'minView',
	'name',
	'numOfMonths',
	'onFocusChange',
	'onOpenChange',
	'onValueChange',
	'onViewChange',
	'onVisibleRangeChange',
	'open',
	'openOnClick',
	'outsideDaySelectable',
	'parse',
	'placeholder',
	'positioning',
	'readOnly',
	'required',
	'selectionMode',
	'showWeekNumbers',
	'startOfWeek',
	'timeZone',
	'translations',
	'value',
	'view',
	'closeOnSelect',
	'createCalendar',
	'defaultFocusedValue',
	'defaultOpen',
	'defaultValue',
	'defaultView',
	'disabled',
	'fixedWeeks',
	'focusedValue',
	'format',
]);

let [createDatePickerProps, localProps] = $derived(
	splitProps(datePickerProps, createDatePickerPropKeys),
);

let id = $props.id();
let datePicker = createDatePicker(() => ({id, ...createDatePickerProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: datePicker().open,
}));

let mergedProps = $derived(mergeProps(datePicker().getRootProps(), localProps));

setDatePickerContext(datePicker);
setPresenceContext(presence);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, datePicker)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(datePicker)}</div>
{/if}
