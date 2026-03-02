<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getProgressContext} from './ProgressContext.svelte.js';

export interface ProgressValueTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ProgressValueTextProps = $props();

let progress = getProgressContext();
let mergedProps = $derived(mergeProps(progress().getValueTextProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{progress().percentAsString}
		{/if}
	</span>
{/if}
