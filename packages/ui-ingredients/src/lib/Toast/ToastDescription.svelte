<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getToastContext} from './ToastContext.svelte.js';

export interface ToastDescriptionProps
	extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ToastDescriptionProps = $props();

let toast = getToastContext();
let mergedProps = $derived(mergeProps(toast().getDescriptionProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<p bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{toast().description}
		{/if}
	</p>
{/if}
