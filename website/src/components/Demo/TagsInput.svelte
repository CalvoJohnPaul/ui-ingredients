<script lang="ts">
import Button from '$components/ui/Button.svelte';
import Label from '$components/ui/Label.svelte';
import {XCloseIcon} from '@untitled-theme/icons-svelte';
import {TagsInput} from 'ui-ingredients';
</script>

<TagsInput.Root class="mx-auto max-w-[20rem]">
	{#snippet children(api)}
		<TagsInput.Label>
			{#snippet asChild(props)}
				<Label {...props()}>Label</Label>
			{/snippet}
		</TagsInput.Label>

		<div
			class="flex min-h-12 flex-wrap gap-2 rounded border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-transparent"
		>
			<TagsInput.Control class="flex flex-wrap gap-2">
				{#each api().value as value, index}
					<TagsInput.Item {index} {value} class="h-7">
						<TagsInput.ItemPreview
							class="flex h-full shrink-0 items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 text-sm leading-3.5 dark:border-neutral-700 dark:bg-neutral-800/50"
						>
							<TagsInput.ItemText>{value}</TagsInput.ItemText>
							<TagsInput.ItemDeleteTrigger
								class="flex items-center justify-center"
							>
								<XCloseIcon class="size-4" />
							</TagsInput.ItemDeleteTrigger>
						</TagsInput.ItemPreview>
						<TagsInput.ItemInput class="outline-none" />
					</TagsInput.Item>
				{/each}
			</TagsInput.Control>

			<TagsInput.Input
				class="w-32 shrink-0 bg-transparent outline-none placeholder:text-neutral-500"
				placeholder="Placeholder"
			/>
		</div>

		<TagsInput.ClearTrigger class="mt-4 w-full">
			{#snippet asChild(props)}
				<Button {...props()}>Clear</Button>
			{/snippet}
		</TagsInput.ClearTrigger>

		<TagsInput.HiddenInput />
	{/snippet}
</TagsInput.Root>
