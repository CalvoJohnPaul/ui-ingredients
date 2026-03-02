<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {InputProps} from '@zag-js/pin-input';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getPinInputContext} from './PinInputContext.svelte.js';

export interface PinInputInputProps
	extends Merge<HtmlIngredientProps<'input', HTMLInputElement>, InputProps> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: PinInputInputProps = $props();

let pinInput = getPinInputContext();
let inputPropKeys: UnionToTuple<keyof InputProps> = ['index'];
let [inputProps, localProps] = $derived(splitProps(props, inputPropKeys));
let mergedProps = $derived(
	mergeProps(pinInput().getInputProps(inputProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
