<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import {createPresence} from '../Presence/createPresence.svelte.js';
import {setPresenceContext} from '../Presence/PresenceContext.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {setComboboxContext} from './ComboboxContext.svelte.js';
import type {
	CreateComboboxProps,
	CreateComboboxReturn,
} from './createCombobox.svelte.js';
import {createCombobox} from './createCombobox.svelte.js';

export interface ComboboxProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateComboboxReturn>,
			SetOptional<CreateComboboxProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ComboboxProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, comboboxProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let createComboboxPropKeys = defineKeyset<CreateComboboxProps>()([
	'id',
	'placeholder',
	'open',
	'defaultOpen',
	'ids',
	'inputValue',
	'defaultInputValue',
	'name',
	'form',
	'disabled',
	'readOnly',
	'invalid',
	'required',
	'defaultHighlightedValue',
	'highlightedValue',
	'value',
	'defaultValue',
	'inputBehavior',
	'selectionBehavior',
	'autoFocus',
	'openOnClick',
	'openOnChange',
	'allowCustomValue',
	'alwaysSubmitOnEnter',
	'loopFocus',
	'positioning',
	'onInputValueChange',
	'onValueChange',
	'onHighlightChange',
	'onSelect',
	'onOpenChange',
	'translations',
	'collection',
	'multiple',
	'closeOnSelect',
	'openOnKeyPress',
	'scrollToIndexFn',
	'composite',
	'disableLayer',
	'navigate',
	'onPointerDownOutside',
	'onFocusOutside',
	'onInteractOutside',
]);

let [createComboboxProps, localProps] = $derived(
	splitProps(comboboxProps, createComboboxPropKeys),
);

let id = $props.id();
let combobox = createCombobox(() => ({id, ...createComboboxProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: combobox().open,
}));

let mergedProps = $derived(mergeProps(combobox().getRootProps(), localProps));

setComboboxContext(combobox);
setPresenceContext(presence);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, combobox)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(combobox)}</div>
{/if}


