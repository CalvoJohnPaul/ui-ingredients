<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {InputProps} from '@zag-js/listbox';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getListboxContext} from './ListboxContext.svelte.js';

export interface ListboxInputProps
	extends Merge<HtmlIngredientProps<'input', HTMLInputElement>, InputProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ListboxInputProps = $props();

let inputPropKeys = defineKeyset<InputProps>()(['autoHighlight']);
let [inputProps, localProps] = $derived(splitProps(props, inputPropKeys));

let listbox = getListboxContext();
let mergedProps = $derived(
	mergeProps(listbox().getInputProps(inputProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
