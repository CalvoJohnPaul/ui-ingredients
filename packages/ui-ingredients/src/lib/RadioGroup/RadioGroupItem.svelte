<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {ItemProps, ItemState} from '@zag-js/radio-group';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getRadioGroupContext,
	setRadioGroupItemPropsContext,
} from './RadioGroupContext.svelte.js';

export interface RadioGroupItemProps
	extends Merge<
		HtmlIngredientProps<'label', HTMLLabelElement, ItemState>,
		ItemProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: RadioGroupItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()([
	'value',
	'disabled',
	'invalid',
]);

let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));
let radioGroup = getRadioGroupContext();
let itemState = () => radioGroup().getItemState(itemProps);
let mergedProps = $derived(
	mergeProps(radioGroup().getItemProps(itemProps), localProps),
);

setRadioGroupItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<label bind:this={ref} {...mergedProps}>
		{@render children?.(itemState)}
	</label>
{/if}


