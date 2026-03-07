<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {AreaProps} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerContext,
	setColorPickerAreaPropsContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerAreaProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, AreaProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerAreaProps = $props();

let areaPropKeys = defineKeyset<AreaProps>()(['xChannel', 'yChannel']);
let [areaProps, localProps] = $derived(splitProps(props, areaPropKeys));
let colorPicker = getColorPickerContext();

let mergedProps = $derived(
	mergeProps(colorPicker().getAreaProps(areaProps), localProps),
);

setColorPickerAreaPropsContext(() => areaProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
