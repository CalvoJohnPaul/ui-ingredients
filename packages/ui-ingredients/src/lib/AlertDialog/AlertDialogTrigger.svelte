<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAlertDialogContext} from './AlertDialogContext.svelte.js';

export interface AlertDialogTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AlertDialogTriggerProps = $props();

let alertDialog = getAlertDialogContext();
let mergedProps = $derived(mergeProps(alertDialog().getTriggerProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
