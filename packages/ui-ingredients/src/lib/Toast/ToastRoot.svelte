<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Api} from '@zag-js/toast';
import type {HtmlIngredientProps} from '../types.js';
import {getToastContext} from './ToastContext.svelte.js';

export interface ToastProps
	extends HtmlIngredientProps<'div', HTMLDivElement, Api> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, children, ...props}: ToastProps = $props();

let toast = getToastContext();
let mergedProps = $derived(mergeProps(toast().getRootProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps, toast)}
{:else}
	<div bind:this={ref} {...mergedProps}>
		<div {...toast().getGhostBeforeProps()}></div>
		{@render children?.(toast)}
		<div {...toast().getGhostAfterProps()}></div>
	</div>
{/if}
