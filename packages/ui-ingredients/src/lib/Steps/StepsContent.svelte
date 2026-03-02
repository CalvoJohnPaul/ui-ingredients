<script lang="ts" module>
import {getPresenceStrategyPropsContext} from '$lib/Presence/PresenceContext.svelte.js';
import {createPresence} from '$lib/Presence/createPresence.svelte.js';
import type {ItemProps} from '@zag-js/steps';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getStepsContext} from './StepsContext.svelte.js';

export interface StepsContentProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	index,
	asChild,
	children,
	...props
}: StepsContentProps = $props();

let steps = getStepsContext();
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
