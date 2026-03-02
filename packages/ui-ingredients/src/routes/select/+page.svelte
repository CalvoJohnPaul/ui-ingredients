<script lang="ts">
import {createListCollection, Portal, Select} from '$lib/index.js';
import CheckIcon from '../@icons/CheckIcon.svelte';
import ChevronDownIcon from '../@icons/ChevronDownIcon.svelte';
import XIcon from '../@icons/XIcon.svelte';

let collection = createListCollection({
	items: [
		{value: '1', label: 'Option 1'},
		{value: '2', label: 'Option 2'},
		{value: '3', label: 'Option 3'},
		{value: '4', label: 'Option 4', disabled: true},
		{value: '5', label: 'Option 5'},
	],
});

let value: string[] = $state([]);

$inspect({value});
</script>

<Select.Root
	{collection}
	{value}
	onValueChange={(detail) => {
    value = detail.value;
  }}
	positioning={{
    sameWidth: true,
  }}
	lazyMount
	keepMounted={false}
	deselectable
>
	<Select.Label>Label</Select.Label>

	<Select.Control>
		<Select.Trigger>
			<Select.ValueText placeholder="Please Select" />
			<Select.Indicator>
				<ChevronDownIcon style="width:20px;height:20px;" />
			</Select.Indicator>
		</Select.Trigger>
		<Select.ClearTrigger>
			<XIcon style="width:20px;height:20px;" />
		</Select.ClearTrigger>
	</Select.Control>

	<Portal>
		<Select.Positioner>
			<Select.Content>
				{#each collection.items as item}
					<Select.Item {item}>
						<Select.ItemText />
						<Select.ItemIndicator>
							<CheckIcon
								style="width:16px;height:16px;color:var(--color-success);"
							/>
						</Select.ItemIndicator>
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Positioner>
	</Portal>
</Select.Root>
