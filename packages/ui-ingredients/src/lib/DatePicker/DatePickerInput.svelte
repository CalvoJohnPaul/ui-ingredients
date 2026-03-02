<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {InputProps} from '@zag-js/date-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getDatePickerContext} from './DatePickerContext.svelte.js';

export interface DatePickerInputProps
	extends Merge<HtmlIngredientProps<'input', HTMLInputElement>, InputProps> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: DatePickerInputProps = $props();

let inputPropKeys = defineKeyset<InputProps>()(['index', 'fixOnBlur']);
let [inputProps, localProps] = $derived(splitProps(props, inputPropKeys));

let datePicker = getDatePickerContext();
let mergedProps = $derived(
	mergeProps(datePicker().getInputProps(inputProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}


