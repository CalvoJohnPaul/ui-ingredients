<script lang="ts">
import {
	CheckIcon,
	ChevronDownIcon,
	XCloseIcon,
} from '@untitled-theme/icons-svelte';
import {Combobox, createListCollection, Portal} from 'ui-ingredients';
import IconButton from '$components/ui/IconButton.svelte';
import Input from '$components/ui/Input.svelte';
import Label from '$components/ui/Label.svelte';

let items = [
	{label: 'Option 1', value: '1'},
	{label: 'Option 2', value: '2'},
	{label: 'Option 3', value: '3'},
	{label: 'Option 4', value: '4'},
	{label: 'Option 5', value: '5', disabled: true},
];

let inputValue = $state('');

let matches = $derived(
	items.filter((item) =>
		item.label.toLowerCase().includes(inputValue.toLowerCase()),
	),
);

let collection = createListCollection(() => ({
	items: matches,
}));
</script>

<Combobox.Root
	{collection}
	{inputValue}
	onInputValueChange={(detail) => {
    inputValue = detail.inputValue;
  }}
	positioning={{
    sameWidth: true,
  }}
	lazyMount
	placeholder="Please Select"
	class="mx-auto w-full max-w-[20rem]"
>
	<Combobox.Label>
		{#snippet asChild(props)}
			<Label {...props()}>Label</Label>
		{/snippet}
	</Combobox.Label>

	<Combobox.Control class="flex gap-2">
		<Combobox.Input class="grow">
			{#snippet asChild(props)}
				<Input {...props()} />
			{/snippet}
		</Combobox.Input>
		<Combobox.Trigger class="group">
			{#snippet asChild(props)}
				<IconButton {...props()}>
					<ChevronDownIcon
						class="transition-transform duration-150 ui-group-open:rotate-180"
					/>
				</IconButton>
			{/snippet}
		</Combobox.Trigger>
		<Combobox.ClearTrigger>
			{#snippet asChild(props)}
				<IconButton {...props()}> <XCloseIcon /> </IconButton>
			{/snippet}
		</Combobox.ClearTrigger>
	</Combobox.Control>

	<Portal>
		<Combobox.Positioner>
			<Combobox.Content
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
					<Combobox.Item
						{item}
						class="flex cursor-default items-center rounded px-2.5 py-1 ui-disabled:cursor-not-allowed ui-disabled:text-neutral-400 ui-highlighted:bg-neutral-50 dark:ui-disabled:text-neutral-500 dark:ui-highlighted:bg-neutral-800/50"
					>
						<Combobox.ItemText class="grow">{item.label}</Combobox.ItemText>
						<Combobox.ItemIndicator>
							<CheckIcon class="size-5 text-green-600 dark:text-green-500" />
						</Combobox.ItemIndicator>
					</Combobox.Item>
				{/each}
			</Combobox.Content>
		</Combobox.Positioner>
	</Portal>
</Combobox.Root>
