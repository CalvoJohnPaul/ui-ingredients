<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getEditableContext} from './EditableContext.svelte.js';

export interface EditableInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: EditableInputProps = $props();

let editable = getEditableContext();
let mergedProps = $derived(mergeProps(editable().getInputProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
