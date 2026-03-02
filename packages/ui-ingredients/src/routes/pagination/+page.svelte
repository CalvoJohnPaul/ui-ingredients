<script lang="ts">
import {Pagination} from '$lib/index.js';
import ChevronLeftIcon from '../ChevronLeftIcon.svelte';
import ChevronRightIcon from '../ChevronRightIcon.svelte';

let page = $state(1);

$inspect(page);
</script>

<Pagination.Root
	count={100}
	pageSize={10}
	{page}
	onPageChange={(detail) => {
    page = detail.page;
  }}
>
	{#snippet children(api)}
		<Pagination.PrevTrigger>
			<ChevronLeftIcon style="width:20px;height:20px;" />
		</Pagination.PrevTrigger>

		{#each api().pages as page, index}
			{#if page.type === 'page'}
				<Pagination.Item value={page.value}> {page.value} </Pagination.Item>
			{:else}
				<Pagination.Ellipsis {index}>...</Pagination.Ellipsis>
			{/if}
		{/each}

		<Pagination.NextTrigger>
			<ChevronRightIcon style="width:20px;height:20px;" />
		</Pagination.NextTrigger>
	{/snippet}
</Pagination.Root>
