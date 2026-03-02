<script lang="ts" module>
import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {setColorPickerContext} from './ColorPickerContext.svelte.js';
import {
	createColorPicker,
	type CreateColorPickerProps,
	type CreateColorPickerReturn,
} from './createColorPicker.svelte.js';

export interface ColorPickerProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateColorPickerReturn>,
			SetOptional<CreateColorPickerProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerProps = $props();

let presenceStrategyPropKeys: UnionToTuple<keyof PresenceStrategyProps> = [
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
];

let [presenceStrategyProps, colorPickerProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let createColorPickerPropKeys: UnionToTuple<keyof CreateColorPickerProps> = [
	'ids',
	'value',
	'defaultValue',
	'disabled',
	'readOnly',
	'required',
	'invalid',
	'onValueChange',
	'onValueChangeEnd',
	'onOpenChange',
	'name',
	'positioning',
	'initialFocusEl',
	'open',
	'defaultOpen',
	'format',
	'defaultFormat',
	'onFormatChange',
	'closeOnSelect',
	'openAutoFocus',
	'inline',
	'id',
	'onPointerDownOutside',
	'onFocusOutside',
	'onInteractOutside',
];

let [createColorPickerProps, localProps] = $derived(
	splitProps(colorPickerProps, createColorPickerPropKeys),
);

let id = $props.id();
let colorPicker = createColorPicker(() => ({id, ...createColorPickerProps}));

let presence = createPresence(() => ({
	present: colorPicker().open,
	...presenceStrategyProps,
}));

let mergedProps = $derived(
	mergeProps(colorPicker().getRootProps(), localProps),
);

setColorPickerContext(colorPicker);
setPresenceContext(presence);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, colorPicker)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(colorPicker)}</div>
{/if}
