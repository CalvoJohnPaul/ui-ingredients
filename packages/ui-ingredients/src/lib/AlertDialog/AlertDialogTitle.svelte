<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAlertDialogContext} from './AlertDialogContext.svelte.js';

export interface AlertDialogTitleProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AlertDialogTitleProps = $props();

let alertDialog = getAlertDialogContext();
let mergedProps = $derived(mergeProps(alertDialog().getTitleProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>{@render children?.()}</span>
{/if}
