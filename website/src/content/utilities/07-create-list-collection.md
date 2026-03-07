---
id: create-list-collection
title: createListCollection
description: A utility for creating list collections used by list-based components like Select, Listbox, and Combobox.
---

## Usage

Use `createListCollection` to build a collection object for components that work with list data.

```svelte
<script>
	import {Select, createListCollection} from 'ui-ingredients';

	let collection = createListCollection({
		items: [
			{value: '1', label: 'Option 1'},
			{value: '2', label: 'Option 2'},
			{value: '3', label: 'Option 3'},
		],
	});
</script>

<Select.Root {collection}>
	<Select.Control>
		<Select.Trigger>Open</Select.Trigger>
	</Select.Control>

	<Select.Positioner>
		<Select.Content>
			{#each collection.items as item}
				<Select.Item {item}>
					<Select.ItemText />
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Positioner>
</Select.Root>
```

### Reactive options with an accessor

When your list is derived from reactive state (for example filtered results), pass a function.

```svelte
<script>
	import {Combobox, createListCollection} from 'ui-ingredients';

	let items = [
		{label: 'Option 1', value: '1'},
		{label: 'Option 2', value: '2'},
		{label: 'Option 3', value: '3'},
	];

	let inputValue = $state('');

	let matches = $derived(
		items.filter(function (item) {
			return item.label.toLowerCase().includes(inputValue.toLowerCase());
		}),
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
>
	<Combobox.Control>
		<Combobox.Input />
	</Combobox.Control>

	<Combobox.Positioner>
		<Combobox.Content>
			{#each collection.items as item}
				<Combobox.Item {item}>
					<Combobox.ItemText>{item.label}</Combobox.ItemText>
				</Combobox.Item>
			{/each}
		</Combobox.Content>
	</Combobox.Positioner>
</Combobox.Root>
```

`createListCollection` accepts either:

- a plain options object
- an accessor function that returns options

