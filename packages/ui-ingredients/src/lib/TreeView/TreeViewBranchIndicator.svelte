<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTreeViewContext,
	getTreeViewNodePropsContext,
} from './TreeViewContext.svelte.js';

export interface TreeViewBranchIndicatorProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TreeViewBranchIndicatorProps = $props();

let treeView = getTreeViewContext();
let nodeProps = getTreeViewNodePropsContext();
let mergedProps = $derived(
	mergeProps(treeView().getBranchIndicatorProps(nodeProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
