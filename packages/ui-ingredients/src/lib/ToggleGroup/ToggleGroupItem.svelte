<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {ItemProps, ItemState} from '@zag-js/toggle-group';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getToggleGroupContext} from './ToggleGroupContext.svelte.js';

export interface ToggleGroupItemProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement, ItemState>,
		ItemProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ToggleGroupItemProps = $props();

let [itemProps, localProps] = $derived(
	splitProps(props, ['value', 'disabled']),
);

let toggleGroup = getToggleGroupContext();
let itemState = () => toggleGroup().getItemState(itemProps);
let mergedProps = $derived(
	mergeProps(toggleGroup().getItemProps(itemProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.(itemState)}
	</button>
{/if}
