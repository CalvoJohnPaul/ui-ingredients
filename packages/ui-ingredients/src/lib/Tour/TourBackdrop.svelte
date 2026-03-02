<script lang="ts" module>
import {createPresence} from '$lib/Presence/createPresence.svelte.js';
import {getPresenceStrategyPropsContext} from '$lib/Presence/PresenceContext.svelte.js';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTourContext} from './TourContext.svelte.js';

export interface TourBackdropProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TourBackdropProps = $props();

let tour = getTourContext();
let presenceStrategyProps = getPresenceStrategyPropsContext();
let presence = createPresence(() => ({
	...presenceStrategyProps(),
	present: tour().step?.backdrop ? tour().open : false,
}));

let mergedProps = $derived(
	mergeProps(tour().getBackdropProps(), presence().getPresenceProps(), props),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
