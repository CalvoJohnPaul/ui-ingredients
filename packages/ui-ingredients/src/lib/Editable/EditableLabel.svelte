<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getEditableContext} from './EditableContext.svelte.js';

export interface EditableLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: EditableLabelProps = $props();

let editable = getEditableContext();
let mergedProps = $derived(mergeProps(editable().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}> {@render children?.()} </label>
{/if}
