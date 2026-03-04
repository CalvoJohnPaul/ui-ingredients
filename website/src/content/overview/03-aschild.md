---
id: aschild
title: The asChild Prop
description: The asChild prop lets you render a custom component to ensure consistent styling and behavior while enhancing flexibility and reusability.
---

# The asChild Prop

The `asChild` prop lets you render a custom component to ensure consistent styling and behavior while enhancing flexibility and reusability.

## Usage

```svelte
<script>
  import {Button} from '$lib/ui';
  import {Dialog} from 'ui-ingredients';
</script>

<Dialog.Root>
  <Dialog.Trigger asChild>
    {#snippet asChild(props)}
      <Button {...props()}>Open</Button>
    {/snippet}
  </Dialog.Trigger>
</Dialog.Root>
```

In this example, the `asChild` prop allows the `Button` to be used as the trigger for the `Dialog`, inheriting its behaviors from `Dialog.Trigger`.

In some components, the `asChild` snippet can also expose component state as a second argument.

```svelte
<script>
  import {Accordion} from 'ui-ingredients';
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';

  let items = [
    {
      value: '1',
      label: 'Item one',
      content: 'Item one description',
    },
    {
      value: '2',
      label: 'Item two',
      content: 'Item two description',
    },
    {
      value: '3',
      label: 'Item three',
      content: 'Item three description',
    },
  ];
</script>

<Accordion.Root>
  {#each items as item}
    <Accordion.Item value={item.value}>
      <Accordion.ItemTrigger>
        {item.label}
        <Accordion.ItemIndicator>
          <ChevronDownIcon />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        {#snippet asChild(props)}
          <p {...props()}>
            {item.content}
          </p>
        {/snippet}
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>
```

You can spread `props()` directly onto your custom element to preserve behavior and accessibility attributes.
