<script lang="ts" module>
import {setPresenceStrategyPropsContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	createTreeView,
	type CreateTreeViewProps,
	type CreateTreeViewReturn,
} from './createTreeView.svelte.js';
import {setTreeViewContext} from './TreeViewContext.svelte.js';

export interface TreeViewProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateTreeViewReturn>,
			SetOptional<CreateTreeViewProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TreeViewProps = $props();

let presenceStrategyPropKeys: UnionToTuple<keyof PresenceStrategyProps> = [
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
];

let [presenceStrategyProps, treeviewProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let createTreeViewPropKeys: UnionToTuple<keyof CreateTreeViewProps> = [
	'collection',
	'ids',
	'expandedValue',
	'defaultExpandedValue',
	'selectedValue',
	'defaultSelectedValue',
	'defaultCheckedValue',
	'checkedValue',
	'defaultFocusedValue',
	'focusedValue',
	'selectionMode',
	'onExpandedChange',
	'onSelectionChange',
	'onFocusChange',
	'onCheckedChange',
	'canRename',
	'onRenameStart',
	'onBeforeRename',
	'onRenameComplete',
	'onLoadChildrenComplete',
	'onLoadChildrenError',
	'expandOnClick',
	'typeahead',
	'loadChildren',
	'scrollToIndexFn',
	'id',
];

let [createTreeViewProps, localProps] = $derived(
	splitProps(treeviewProps, createTreeViewPropKeys),
);

let id = $props.id();
let treeView = createTreeView(() => ({id, ...createTreeViewProps}));
let mergedProps = $derived(mergeProps(treeView().getRootProps(), localProps));

setTreeViewContext(treeView);
setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, treeView)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(treeView)}</div>
{/if}
