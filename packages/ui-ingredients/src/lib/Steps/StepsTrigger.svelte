<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getStepsContext,
	getStepsItemPropsContext,
} from './StepsContext.svelte.js';

export interface StepsTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: StepsTriggerProps = $props();

let steps = getStepsContext();
let itemProps = getStepsItemPropsContext();
let mergedProps = $derived(
	mergeProps(steps().getTriggerProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
