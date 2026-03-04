<script lang="ts">
import {ScrollArea} from 'ui-ingredients';

const links = [
	'Introduction',
	'Installation',
	'Composition',
	'Styling',
	'API Reference',
	'Accessibility',
	'Server Rendering',
	'Testing',
	'Release Notes',
	'Migration Guide',
];
</script>

<ScrollArea.Root
	class="mx-auto h-64 w-full max-w-md overflow-hidden rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
>
	<ScrollArea.Viewport class="h-full w-full [&::-webkit-scrollbar]:hidden">
		<ScrollArea.Content class="space-y-2 p-4">
			{#each links as item (item)}
				<div
					class="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200"
				>
					{item}
				</div>
			{/each}
		</ScrollArea.Content>
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="opacity-0 ui-hover:opacity-100 transition-opacity duration-250 w-3 p-0.75"
	>
		<ScrollArea.Thumb class="rounded-full bg-neutral-300 dark:bg-neutral-700" />
	</ScrollArea.Scrollbar>
	<ScrollArea.Corner />
</ScrollArea.Root>
