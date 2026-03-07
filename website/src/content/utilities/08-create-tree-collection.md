---
id: create-tree-collection
title: createTreeCollection
description: A utility for creating tree collections used by hierarchical components like Tree View.
---

## Usage

Use `createTreeCollection` to build a collection for hierarchical data.

```svelte
<script lang="ts">
	import {type NodeProps, TreeView, createTreeCollection} from 'ui-ingredients';

	interface Node {
		value: string;
		label: string;
		children?: Node[];
	}

	let collection = createTreeCollection<Node>({
		nodeToValue(node) {
			return node.value;
		},
		nodeToString(node) {
			return node.label;
		},
		rootNode: {
			value: '',
			label: '',
			children: [
				{
					value: 'src',
					label: 'src',
					children: [
						{value: 'src/app.html', label: 'app.html'},
						{value: 'src/routes', label: 'routes'},
					],
				},
				{value: 'package.json', label: 'package.json'},
			],
		},
	});
</script>

<TreeView.Root {collection}>
	<TreeView.Label>Explorer</TreeView.Label>
	<TreeView.Tree>
		{#each collection.rootNode.children ?? [] as node, index}
			{@render NodeRow({node, indexPath: [index]})}
		{/each}
	</TreeView.Tree>
</TreeView.Root>

{#snippet NodeRow(props: NodeProps<Node>)}
	{#if props.node.children}
		<TreeView.Branch node={props.node} indexPath={props.indexPath}>
			<TreeView.BranchControl>
				<TreeView.BranchText>{props.node.label}</TreeView.BranchText>
			</TreeView.BranchControl>
			<TreeView.BranchContent>
				{#each props.node.children as node, index}
					{@render NodeRow({node, indexPath: [...props.indexPath, index]})}
				{/each}
			</TreeView.BranchContent>
		</TreeView.Branch>
	{:else}
		<TreeView.Item node={props.node} indexPath={props.indexPath}>
			<TreeView.ItemText>{props.node.label}</TreeView.ItemText>
		</TreeView.Item>
	{/if}
{/snippet}
```

You can pass either:

- a plain options object
- an accessor function that returns options

