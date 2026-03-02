<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {NodeProps} from '@zag-js/tree-view';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTreeViewContext,
	setTreeViewNodePropsContext,
} from './TreeViewContext.svelte.js';

export interface TreeViewItemProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, NodeProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TreeViewItemProps = $props();

let nodePropKeys = defineKeyset<NodeProps>()(['node', 'indexPath']);
let [nodeProps, localProps] = $derived(splitProps(props, nodePropKeys));

let treeView = getTreeViewContext();
let mergedProps = $derived(
	mergeProps(treeView().getItemProps(nodeProps), localProps),
);

setTreeViewNodePropsContext(() => nodeProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


