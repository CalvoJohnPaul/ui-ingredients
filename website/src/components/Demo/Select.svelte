<script lang="ts">
import {
	CheckIcon,
	ChevronDownIcon,
	XCloseIcon,
} from '@untitled-theme/icons-svelte';
import {createListCollection, Portal, Select} from 'ui-ingredients';
import Button from '$components/ui/Button.svelte';
import IconButton from '$components/ui/IconButton.svelte';
import Label from '$components/ui/Label.svelte';

let collection = createListCollection({
	items: [
		{value: '1', label: 'Option 1'},
		{value: '2', label: 'Option 2'},
		{value: '3', label: 'Option 3'},
		{value: '4', label: 'Option 4', disabled: true},
		{value: '5', label: 'Option 5'},
	],
});
</script>

<Select.Root
	{collection}
	positioning={{
    sameWidth: true,
  }}
	lazyMount
	keepMounted={false}
	deselectable
>
	<Select.Control class="mx-auto max-w-[20rem]">
		<Select.Label>
			{#snippet asChild(props)}
				<Label {...props()}>Label</Label>
			{/snippet}
		</Select.Label>
		<div class="flex gap-2">
			<Select.Trigger
				class="grow text-left font-normal ui-placeholder-shown:text-neutral-400"
			>
				{#snippet asChild(props)}
					<Button variant="outline" {...props()}>
						<Select.ValueText placeholder="Please Select" class="grow" />
						<Select.Indicator class="group">
							<ChevronDownIcon
								class="transition-transform duration-150 ui-group-open:rotate-180"
							/>
						</Select.Indicator>
					</Button>
				{/snippet}
			</Select.Trigger>
			<Select.ClearTrigger>
				{#snippet asChild(props)}
					<IconButton {...props()}> <XCloseIcon /> </IconButton>
				{/snippet}
			</Select.ClearTrigger>
		</div>
	</Select.Control>

	<Portal>
		<Select.Positioner>
			<Select.Content
				class={[
					'rounded',
					'border',
					'border-neutral-200',
					'bg-white',
					'p-2',
					'dark:border-neutral-800',
					'dark:bg-neutral-900',

					'ui-placement-bottom:ui-open:animate-popover-in-bottom',
					'ui-placement-bottom-start:ui-open:animate-popover-in-bottom',
					'ui-placement-bottom-end:ui-open:animate-popover-in-bottom',
					'ui-placement-bottom:ui-closed:animate-popover-out-bottom',
					'ui-placement-bottom-start:ui-closed:animate-popover-out-bottom',
					'ui-placement-bottom-end:ui-closed:animate-popover-out-bottom',

					'ui-placement-top:ui-open:animate-popover-in-top',
					'ui-placement-top-start:ui-open:animate-popover-in-top',
					'ui-placement-top-end:ui-open:animate-popover-in-top',
					'ui-placement-top:ui-closed:animate-popover-out-top',
					'ui-placement-top-start:ui-closed:animate-popover-out-top',
					'ui-placement-top-end:ui-closed:animate-popover-out-top',

					'ui-placement-left:ui-open:animate-popover-in-left',
					'ui-placement-left-start:ui-open:animate-popover-in-left',
					'ui-placement-left-end:ui-open:animate-popover-in-left',
					'ui-placement-left:ui-closed:animate-popover-out-left',
					'ui-placement-left-start:ui-closed:animate-popover-out-left',
					'ui-placement-left-end:ui-closed:animate-popover-out-left',

					'ui-placement-right:ui-open:animate-popover-in-right',
					'ui-placement-right-start:ui-open:animate-popover-in-right',
					'ui-placement-right-end:ui-open:animate-popover-in-right',
					'ui-placement-right:ui-closed:animate-popover-out-right',
					'ui-placement-right-start:ui-closed:animate-popover-out-right',
					'ui-placement-right-end:ui-closed:animate-popover-out-right',
				]}
			>
				{#each collection.items as item}
					<Select.Item
						{item}
						class="flex cursor-default items-center rounded px-2.5 py-1 ui-disabled:cursor-not-allowed ui-disabled:text-neutral-400 ui-highlighted:bg-neutral-50 dark:ui-disabled:text-neutral-500 dark:ui-highlighted:bg-neutral-800/50"
					>
						<Select.ItemText class="grow" />
						<Select.ItemIndicator>
							<CheckIcon class="size-5 text-green-600 dark:text-green-500" />
						</Select.ItemIndicator>
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Positioner>
	</Portal>
</Select.Root>
