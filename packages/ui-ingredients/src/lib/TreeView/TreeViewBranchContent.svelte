<script lang="ts" module>
import {getCollapsibleContext} from '$lib/Collapsible/CollapsibleContext.svelte.js';
import {getPresenceStrategyPropsContext} from '$lib/Presence/PresenceContext.svelte.js';
import {createPresence} from '$lib/Presence/createPresence.svelte.js';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTreeViewContext,
	getTreeViewNodePropsContext,
} from './TreeViewContext.svelte.js';

export interface TreeViewBranchContentProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TreeViewBranchContentProps = $props();

let treeView = getTreeViewContext();
let nodeProps = getTreeViewNodePropsContext();
let nodeState = $derived(treeView().getNodeState(nodeProps()));
let collapsible = getCollapsibleContext();
let presenceStrategyProps = getPresenceStrategyPropsContext();
let presence = createPresence(() => ({
	...presenceStrategyProps(),
	present: nodeState.expanded,
}));

let mergedProps = $derived(
	mergeProps(
		collapsible().getContentProps(),
		treeView().getBranchContentProps(nodeProps()),
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
