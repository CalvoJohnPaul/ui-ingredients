<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {TransparencyGridProps} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerTransparencyGridProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement>,
		TransparencyGridProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerTransparencyGridProps = $props();

let transparencyGridPropKeys = defineKeyset<TransparencyGridProps>()([
	'size',
]);

let [transparencyGridProps, localProps] = $derived(
	splitProps(props, transparencyGridPropKeys),
);

let colorPicker = getColorPickerContext();
let mergedProps = $derived(
	mergeProps(
		colorPicker().getTransparencyGridProps(transparencyGridProps),
		localProps,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


