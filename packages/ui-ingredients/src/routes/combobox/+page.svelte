<script lang="ts">
import {Combobox, createFilter, createListCollection} from '$lib/index.js';
import CheckIcon from '../@icons/CheckIcon.svelte';
import ChevronDownIcon from '../@icons/ChevronDownIcon.svelte';
import XIcon from '../@icons/XIcon.svelte';

let items = [
	{label: 'Option 1', value: '1'},
	{label: 'Option 2', value: '2'},
	{label: 'Option 3', value: '3'},
	{label: 'Option 4', value: '4'},
	{label: 'Option 5', value: '5', disabled: true},
];

let value: string[] = $state([]);
let inputValue = $state('');

let filter = createFilter();
let collection = createListCollection(() => ({
	items: items.filter((item) => filter.contains(item.label, inputValue)),
}));
</script>

<Combobox.Root
	{collection}
	{value}
	onValueChange={(detail) => {
    value = detail.value;
  }}
	{inputValue}
	onInputValueChange={(detail) => {
    inputValue = detail.inputValue;
  }}
	positioning={{
    sameWidth: true,
  }}
	multiple
	lazyMount
	placeholder="Please Select"
>
	<Combobox.Label>Label</Combobox.Label>
	<Combobox.Control>
		<Combobox.Input />
		<Combobox.Trigger>
			<ChevronDownIcon style="width:20px;height:20px;" />
		</Combobox.Trigger>
		<Combobox.ClearTrigger>
			<XIcon style="width:20px;height:20px;" />
		</Combobox.ClearTrigger>
	</Combobox.Control>
	<Combobox.Positioner>
		<Combobox.Content>
			{#each collection.items as item}
				<Combobox.Item {item}>
					<Combobox.ItemText>{item.label}</Combobox.ItemText>
					<Combobox.ItemIndicator>
						<CheckIcon
							style="width:16px;height:16px;color:var(--color-success);"
						/>
					</Combobox.ItemIndicator>
				</Combobox.Item>
			{/each}
		</Combobox.Content>
	</Combobox.Positioner>
</Combobox.Root>
