---
id: create-filter
title: createFilter
description: A locale-aware utility for filtering text in components like Combobox, Listbox, and Select.
---

## Usage

Use `createFilter` when you need locale-aware string matching.

```svelte
<script>
	import {Combobox, createFilter, createListCollection} from 'ui-ingredients';

	let items = [
		{label: 'Option 1', value: '1'},
		{label: 'Option 2', value: '2'},
		{label: 'Option 3', value: '3'},
	];

	let inputValue = $state('');

	let filter = createFilter();

	let collection = createListCollection(() => ({
		items: items.filter((item) => filter.contains(item.label, inputValue)),
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

By default, `createFilter` uses locale from `LocaleProvider` (when available) and `sensitivity: 'base'`.

You can pass options directly or with an accessor function.

