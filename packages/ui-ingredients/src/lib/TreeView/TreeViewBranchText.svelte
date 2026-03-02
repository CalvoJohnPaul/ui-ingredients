<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTreeViewContext,
	getTreeViewNodePropsContext,
} from './TreeViewContext.svelte.js';

export interface TreeViewBranchTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TreeViewBranchTextProps = $props();

let treeView = getTreeViewContext();
let nodeProps = getTreeViewNodePropsContext();
let mergedProps = $derived(
	mergeProps(treeView().getBranchTextProps(nodeProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
