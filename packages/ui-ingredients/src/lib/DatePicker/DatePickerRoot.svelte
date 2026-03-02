<script lang="ts" module>
import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
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

let presenceStrategyPropKeys: UnionToTuple<keyof PresenceStrategyProps> = [
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
];

let [presenceStrategyProps, datePickerProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let createDatePickerPropKeys: UnionToTuple<keyof CreateDatePickerProps> = [
	'id',
	'translations',
	'ids',
	'name',
	'timeZone',
	'disabled',
	'timeZone',
	'required',
	'invalid',
	'outsideDaySelectable',
	'min',
	'max',
	'closeOnSelect',
	'openOnClick',
	'value',
	'defaultValue',
	'focusedValue',
	'defaultFocusedValue',
	'numOfMonths',
	'startOfWeek',
	'fixedWeeks',
	'showWeekNumbers',
	'onValueChange',
	'onFocusChange',
	'onViewChange',
	'onVisibleRangeChange',
	'onOpenChange',
	'isDateUnavailable',
	'selectionMode',
	'maxSelectedDates',
	'format',
	'parse',
	'placeholder',
	'view',
	'defaultView',
	'minView',
	'maxView',
	'positioning',
	'open',
	'defaultOpen',
	'inline',
];

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
