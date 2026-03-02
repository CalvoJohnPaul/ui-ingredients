<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getToastContext} from './ToastContext.svelte.js';

export interface ToastTitleProps
	extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ToastTitleProps = $props();

let toast = getToastContext();
let mergedProps = $derived(mergeProps(toast().getTitleProps(), props));
</script>

{#if asChild}
	{@render asChild(mergedProps)}
{:else}
	<h2 bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{toast().title}
		{/if}
	</h2>
{/if}
