---
id: children-snippet
title: The children snippet
description: Learn how to use the children snippet to customize rendering and access component state, including Root-level API access.
---

# The children snippet

The `children` snippet gives you full control over what gets rendered inside a component part.

Many components expose state through this snippet. Most importantly, when used on a `*.Root`, the snippet receives the component API accessor so you can render based on live state.

## Basic usage

Use `children` when a component part provides state through a snippet argument.

```svelte
<Clipboard.Indicator>
	{#snippet children(api)}
		{#if api().copied}
			Copied
		{:else}
			Copy
		{/if}
	{/snippet}
</Clipboard.Indicator>
```

In this case, `api` is an accessor function exposed by `Clipboard.Indicator`, so read values via `api()`.

## Root children and API access

Root components expose their full API accessor through `children`.

```svelte
<script>
	import {PasswordInput} from 'ui-ingredients';
	import {EyeOffIcon, EyeIcon} from '$lib/icons';
</script>

<PasswordInput.Root>
	{#snippet children(api)}
		<PasswordInput.Label>Password</PasswordInput.Label>
		<PasswordInput.Control>
			<PasswordInput.Input />
			<PasswordInput.VisibilityTrigger>
				<PasswordInput.Indicator>
					{#if api().visible}
						<EyeIcon />
					{:else}
						<EyeOffIcon />
					{/if}
				</PasswordInput.Indicator>
			</PasswordInput.VisibilityTrigger>
		</PasswordInput.Control>
	{/snippet}
</PasswordInput.Root>
```

The `api` accessor comes from `PasswordInput.Root`, so you can drive custom UI from root state (`api().visible` in this example).

## Root vs nested children

- `Root children`: exposes the full component API accessor. Use this when you need top-level state and methods for the whole component.
- `Nested children`: exposes state scoped to that part. Use this for part-specific rendering (for example indicator or item state).
- `Access pattern`: treat snippet args as accessors and read values with `arg()` (for example `api().visible` or `state().checked`).
- `Naming`: use clear names by scope, like `api` for `*.Root` and `state` or `ctx` for nested parts.

## When to use children vs asChild

Use this rule of thumb:

- Choose `children` when your UI needs values from snippet state/accessors (for example `api().visible`, `ctx().copied`, `state().checked`).
- Choose `asChild` when you want to replace the underlying element/component, while forwarding behavior and accessibility props.

Quick comparison:

- `children`: state-first composition. You render conditional UI from the exposed accessor.
- `asChild`: element-first composition. You keep the behavior, but provide your own element/component.

```svelte
<!-- children: read component state -->
<PasswordInput.Root>
  {#snippet children(api)}
    {#if api().visible}
      Hide
    {:else}
      Show
    {/if}
  {/snippet}
</PasswordInput.Root>

<!-- asChild: replace the rendered element -->
<Dialog.Trigger asChild>
  {#snippet asChild(props, api)}
    <Button {...props()}>
      {#if api().open}
        Close
      {:else}
        Open
      {/if}
    </Button>
  {/snippet}
</Dialog.Trigger>
```
