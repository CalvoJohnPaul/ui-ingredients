<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {setCollapsibleContext} from '$lib/Collapsible/CollapsibleContext.svelte.js';
import {createCollapsible} from '$lib/Collapsible/createCollapsible.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {NodeProps, NodeState} from '@zag-js/tree-view';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTreeViewContext,
	setTreeViewNodePropsContext,
} from './TreeViewContext.svelte.js';

export interface TreeViewBranchProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, NodeState>,
		NodeProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TreeViewBranchProps = $props();

let nodePropKeys = defineKeyset<NodeProps>()(['node', 'indexPath']);
let [nodeProps, localProps] = $derived(splitProps(props, nodePropKeys));

let treeView = getTreeViewContext();
let nodeState = () => treeView().getNodeState(nodeProps);
let branchContentProps = $derived(treeView().getBranchContentProps(nodeProps));

let id = $props.id();
let collapbsible = createCollapsible(() => ({
	id,
	ids: {content: branchContentProps.id},
	open: nodeState().expanded,
	disabled: nodeState().disabled,
}));

let mergedProps = $derived(
	mergeProps(
		collapbsible().getRootProps(),
		treeView().getBranchProps(nodeProps),
		localProps,
	),
);

setCollapsibleContext(collapbsible);
setTreeViewNodePropsContext(() => nodeProps);
</script>

{#if asChild}
	{@render asChild(mergedProps, nodeState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(nodeState)}</div>
{/if}
