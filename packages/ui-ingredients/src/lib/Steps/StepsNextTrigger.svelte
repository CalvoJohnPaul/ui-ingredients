<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getStepsContext} from './StepsContext.svelte.js';

export interface StepsNextTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: StepsNextTriggerProps = $props();

let steps = getStepsContext();
let mergedProps = $derived(mergeProps(steps().getNextTriggerProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
