<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import {omit} from 'es-toolkit';
import {createPresence} from '../Presence/createPresence.svelte.js';
import {getPresenceStrategyPropsContext} from '../Presence/PresenceContext.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {getDrawerContext} from './DrawerContext.svelte.js';

export interface DrawerBackdropProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: DrawerBackdropProps = $props();

let drawer = getDrawerContext();
let presenceStrategyProps = getPresenceStrategyPropsContext();
let presence = createPresence(() => ({
	...omit(presenceStrategyProps(), ['onExitComplete']),
	present: drawer().open,
}));

let mergedProps = $derived(
	mergeProps(drawer().getBackdropProps(), presence().getPresenceProps(), props),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
