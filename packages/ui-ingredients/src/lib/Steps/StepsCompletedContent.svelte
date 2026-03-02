<script lang="ts" module>
import {createPresence} from '$lib/Presence/createPresence.svelte.js';
import {getPresenceStrategyPropsContext} from '$lib/Presence/PresenceContext.svelte.js';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getStepsContext} from './StepsContext.svelte.js';

export interface StepsCompletedContentProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: StepsCompletedContentProps = $props();

let steps = getStepsContext();
let index = $derived(steps().count);
let presenceStrategyProps = getPresenceStrategyPropsContext();
let presence = createPresence(() => ({
	...presenceStrategyProps(),
	present: steps().value === index,
}));

let mergedProps = $derived(
	mergeProps(
		steps().getContentProps({index}),
		presence().getPresenceProps(),
		props,
	),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
