<script lang="ts" module>
import {autoresizeTextarea} from '@zag-js/auto-resize';
import {mergeProps} from '@zag-js/svelte';
import {createAttachmentKey} from 'svelte/attachments';
import type {HtmlIngredientProps} from '../types.js';
import {getFieldContext} from './FieldContext.svelte.js';

export interface FieldTextareaProps
	extends HtmlIngredientProps<'textarea', HTMLTextAreaElement> {
	autoResize?: boolean;
}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	autoResize,
	asChild,
	...props
}: FieldTextareaProps = $props();

let field = getFieldContext();
let mergedProps = $derived(
	mergeProps(field?.().getTextareaProps() ?? {}, props, {
		[createAttachmentKey()]: (node: HTMLTextAreaElement) => {
			if (autoResize) return autoresizeTextarea(node);
		},
	}),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<textarea bind:this={ref} {...mergedProps}></textarea>
{/if}
