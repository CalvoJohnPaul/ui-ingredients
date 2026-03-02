<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	createSelect,
	type CreateSelectProps,
	type CreateSelectReturn,
} from './createSelect.svelte.js';
import {setSelectContext} from './SelectContext.svelte.js';

export interface SelectProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateSelectReturn>,
			SetOptional<CreateSelectProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SelectProps = $props();

let createSelectPropKeys = defineKeyset<CreateSelectProps>()([
	'collection',
	'ids',
	'name',
	'form',
	'autoComplete',
	'disabled',
	'invalid',
	'readOnly',
	'required',
	'closeOnSelect',
	'onSelect',
	'onHighlightChange',
	'onValueChange',
	'onOpenChange',
	'positioning',
	'value',
	'defaultValue',
	'highlightedValue',
	'defaultHighlightedValue',
	'loopFocus',
	'multiple',
	'open',
	'defaultOpen',
	'scrollToIndexFn',
	'composite',
	'deselectable',
	'id',
	'onPointerDownOutside',
	'onFocusOutside',
	'onInteractOutside',
]);

let [createSelectProps, selectProps] = $derived(
	splitProps(props, createSelectPropKeys),
);

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, localProps] = $derived(
	splitProps(selectProps, presenceStrategyPropKeys),
);

let id = $props.id();
let select = createSelect(() => ({id, ...createSelectProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: select().open,
}));

let mergedProps = $derived(mergeProps(select().getRootProps(), localProps));

setSelectContext(select);
setPresenceContext(presence);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, select)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(select)}</div>
{/if}


