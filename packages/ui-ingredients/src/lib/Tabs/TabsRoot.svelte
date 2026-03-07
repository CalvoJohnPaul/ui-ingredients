<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createTabs,
	type CreateTabsProps,
	type CreateTabsReturn,
} from './createTabs.svelte.js';
import {setTabsContext} from './TabsContext.svelte.js';

export interface TabsProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateTabsReturn>,
		SetOptional<CreateTabsProps, 'id'>
	> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, children, ...props}: TabsProps = $props();

let createTabsPropKeys = defineKeyset<CreateTabsProps>()([
	'id',
	'ids',
	'translations',
	'loopFocus',
	'value',
	'defaultValue',
	'orientation',
	'activationMode',
	'onValueChange',
	'onFocusChange',
	'composite',
	'deselectable',
	'navigate',
]);

let [createTabsProps, localProps] = $derived(
	splitProps(props, createTabsPropKeys),
);

let id = $props.id();
let tabs = createTabs(() => ({id, ...createTabsProps}));
let mergedProps = $derived(mergeProps(tabs().getRootProps(), localProps));

setTabsContext(tabs);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, tabs)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(tabs)}</div>
{/if}
