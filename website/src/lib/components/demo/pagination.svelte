<script lang="ts">
import Button from '$lib/components/ui/button.svelte';
import IconButton from '$lib/components/ui/icon-button.svelte';
import {ChevronLeftIcon, ChevronRightIcon} from '@untitled-theme/icons-svelte';
import {Pagination} from 'ui-ingredients';
</script>

<Pagination.Root
	count={100}
	pageSize={10}
	class="mx-auto flex w-fit flex-wrap items-center gap-2"
>
	{#snippet children(api)}
		<Pagination.PrevTrigger>
			{#snippet asChild(props)}
				<IconButton variant="outline" {...props()}>
					<ChevronLeftIcon />
				</IconButton>
			{/snippet}
		</Pagination.PrevTrigger>

		{#each api().pages as page, index}
			{#if page.type === 'page'}
				<Pagination.Item value={page.value}>
					{#snippet asChild(props)}
						<Button variant="outline" {...props()}> {page.value} </Button>
					{/snippet}
				</Pagination.Item>
			{:else}
				<Pagination.Ellipsis
					{index}
					class="flex size-12 items-center justify-center text-neutral-400 dark:text-neutral-500"
				>
					...
				</Pagination.Ellipsis>
			{/if}
		{/each}

		<Pagination.NextTrigger>
			{#snippet asChild(props)}
				<IconButton variant="outline" {...props()}>
					<ChevronRightIcon />
				</IconButton>
			{/snippet}
		</Pagination.NextTrigger>
	{/snippet}
</Pagination.Root>
