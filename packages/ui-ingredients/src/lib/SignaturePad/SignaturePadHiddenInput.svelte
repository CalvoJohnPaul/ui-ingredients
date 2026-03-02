<script lang="ts" module>
import type {HiddenInputProps} from '@zag-js/signature-pad';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getSignaturePadContext} from './SignaturePadContext.svelte.js';

export interface SignaturePadHiddenInputProps
	extends Merge<
		HtmlIngredientProps<'input', HTMLInputElement>,
		HiddenInputProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	value,
	asChild,
	...props
}: SignaturePadHiddenInputProps = $props();

let signaturePad = getSignaturePadContext();
let mergedProps = $derived(
	mergeProps(signaturePad().getHiddenInputProps({value}), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
