<script lang="ts">
import {createTreeCollection, type NodeProps, TreeView} from '$lib/index.js';
import type {Component} from 'svelte';
import ChevronRightIcon from '../@icons/ChevronRightIcon.svelte';
import FileIcon from '../@icons/FileIcon.svelte';
import FolderIcon from '../@icons/FolderIcon.svelte';

interface Node {
	icon: Component;
	value: string;
	label: string;
	children?: Node[];
}

let collection = createTreeCollection<Node>({
	nodeToValue: (node) => node.value,
	nodeToString: (node) => node.label,
	rootNode: {
		icon: FileIcon,
		value: 'ROOT',
		label: '',
		children: [
			{
				icon: FolderIcon,
				value: 'node_modules',
				label: 'node_modules',
				children: [
					{
						icon: FolderIcon,
						value: 'node_modules/svelte',
						label: 'svelte',
					},
					{
						icon: FolderIcon,
						value: 'node_modules/ui-ingredients',
						label: 'ui-ingredients',
					},
				],
			},
			{
				icon: FolderIcon,
				value: 'src',
				label: 'src',
				children: [
					{
						icon: FolderIcon,
						value: 'src/(home)',
						label: '(home)',
						children: [
							{
								icon: FileIcon,
								value: 'src/(home)/+page.svelte',
								label: '+page.svelte',
							},
							{
								icon: FileIcon,
								value: 'src/(home)/hero.svelte',
								label: 'hero.svelte',
							},
						],
					},
					{
						icon: FileIcon,
						value: 'src/+layout.svelte',
						label: '+layout.svelte',
					},
				],
			},
			{
				icon: FileIcon,
				value: 'vite.config.ts',
				label: 'vite.config.ts',
			},
			{
				icon: FileIcon,
				value: 'svelte.config.js',
				label: 'svelte.config.js',
			},
			{
				icon: FileIcon,
				value: 'package.json',
				label: 'package.json',
			},
		],
	},
});
</script>

<TreeView.Root {collection}>
	<TreeView.Label>Explorer</TreeView.Label>
	<TreeView.Tree>
		{#each collection.rootNode.children ?? [] as node, index}
			{@render TreeNode({node, indexPath: [index]})}
		{/each}
	</TreeView.Tree>
</TreeView.Root>

{#snippet TreeNode(props: NodeProps<Node>)}
	{@const Icon = props.node.icon}

	{#if props.node.children}
		<TreeView.Branch node={props.node} indexPath={props.indexPath}>
			<TreeView.BranchControl>
				<TreeView.BranchText>
					<Icon style="width:16px;height:16px;" />
					<span>{props.node.label}</span>
				</TreeView.BranchText>
				<TreeView.BranchIndicator>
					<ChevronRightIcon style="width:16px;height:16px;" />
				</TreeView.BranchIndicator>
			</TreeView.BranchControl>
			<TreeView.BranchContent>
				<TreeView.BranchIndentGuide />
				<div style="display:flex;flex-direction:column;flex-grow:1;">
					{#each props.node.children as node, index}
						{@render TreeNode({node, indexPath: [...props.indexPath, index]})}
					{/each}
				</div>
			</TreeView.BranchContent>
		</TreeView.Branch>
	{:else}
		<TreeView.Item node={props.node} indexPath={props.indexPath}>
			<TreeView.ItemText>
				<Icon style="width:16px;height:16px;" />
				<span>{props.node.label}</span>
			</TreeView.ItemText>
		</TreeView.Item>
	{/if}
{/snippet}
