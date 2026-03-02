<script lang="ts">
import {Steps} from '$lib/index.js';

const items = [
	{title: 'First', content: 'Do this first.'},
	{title: 'Second', content: 'Then do this.'},
	{title: 'Third', content: 'Finally do this.'},
];
</script>

<Steps.Root count={items.length} lazyMount keepMounted={false}>
	<Steps.List>
		{#each items as item, index}
			<Steps.Item {index}>
				<Steps.Trigger>
					<Steps.Indicator> {index + 1} </Steps.Indicator>
					{item.title}
				</Steps.Trigger>

				{#if index + 1 < items.length}
					<Steps.Separator />
				{/if}
			</Steps.Item>
		{/each}
	</Steps.List>

	{#each items as item, index}
		<Steps.Content {index}> {item.content} </Steps.Content>
	{/each}

	<Steps.CompletedContent>All good!</Steps.CompletedContent>

	<div style="display:flex;gap:8px;">
		<Steps.PrevTrigger>Back</Steps.PrevTrigger>
		<Steps.NextTrigger>Next</Steps.NextTrigger>
	</div>
</Steps.Root>
