<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import type {
	CreateToggleProps,
	CreateToggleReturn,
} from './createToggle.svelte.js';
import {createToggle} from './createToggle.svelte.js';
import {setToggleContext} from './ToggleContext.svelte.js';

export interface ToggleProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement, CreateToggleReturn>,
		CreateToggleProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ToggleProps = $props();

let createTogglePropKeys = defineKeyset<CreateToggleProps>()([
	'disabled',
	'defaultPressed',
	'pressed',
	'onPressedChange',
]);

let [createToggleProps, localProps] = $derived(
	splitProps(props, createTogglePropKeys),
);

let toggle = createToggle(() => createToggleProps);
let mergedProps = $derived(mergeProps(toggle().getRootProps(), localProps));

setToggleContext(toggle);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, toggle)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.(toggle)}
	</button>
{/if}
