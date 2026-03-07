---
id: aschild
title: The asChild snippet
description: The asChild snippet lets you render a custom component while preserving behavior, props, and accessibility.
---

# The asChild snippet

Use the `asChild` snippet to render your own element/component while preserving behavior and accessibility attributes from the UI Ingredients part.

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

In this example, `Dialog.Trigger` is set to `asChild` and the `asChild` snippet renders `Button` as the trigger while inheriting behavior from `Dialog.Trigger`.

In components that expose state/API through `asChild`, the first argument is always `props`, and the second argument is the API/state accessor.

```svelte
<script>
  import IconButton from '$components/ui/IconButton.svelte';
  import {Bell02Icon, BellOff02Icon} from '@untitled-theme/icons-svelte';
  import {Toggle} from 'ui-ingredients';
</script>

<Toggle.Root>
  {#snippet asChild(props, api)}
    <IconButton {...props()}>
      {#if api().pressed}
        <BellOff02Icon />
      {:else}
        <Bell02Icon />
      {/if}
    </IconButton>
  {/snippet}
</Toggle.Root>
```

`props()` preserves behavior and accessibility attributes, while `api()` gives you access to state for conditional rendering.
