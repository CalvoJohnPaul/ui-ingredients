---
id: split-props
title: splitProps
description: A utility to split an object into selected keys and the remaining keys.
---

## Usage

Use `splitProps` to separate one group of keys from the rest of an object.

It is commonly used in component wrappers to split recipe/variant props from native element props.

```svelte
<script lang="ts">
	import type {Assign} from '$types';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {splitProps} from 'ui-ingredients';
	import {inputRecipe, type InputRecipeProps} from './Input.recipe';

	let {
		value = $bindable(''),
		...props
	}: Assign<SvelteHTMLElements['input'], InputRecipeProps> = $props();

	let [recipeProps, localProps] = $derived(
		splitProps(props, inputRecipe.variantKeys),
	);
</script>

<input
	type="text"
	bind:value
	{...localProps}
	class={[inputRecipe(recipeProps), localProps.class]}
/>
```

`splitProps(props, keys)` returns a tuple:

- first item: picked keys
- second item: remaining keys

```ts
const [picked, rest] = splitProps(props, ['size', 'variant']);
```

Function signature:

```ts
splitProps<T extends object, K extends keyof T>(
  props: T,
  keys: K[],
): [Pick<T, K>, Omit<T, K>]
```
