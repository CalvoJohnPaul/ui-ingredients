<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {defineKeyset} from '$lib/defineKeySet.js';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import {setPresenceStrategyPropsContext} from '../Presence/PresenceContext.svelte.js';
import {splitProps} from '../splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {setAccordionContext} from './AccordionContext.svelte.js';
import {
	type CreateAccordionProps,
	type CreateAccordionReturn,
	createAccordion,
} from './createAccordion.svelte.js';

export interface AccordionProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateAccordionReturn>,
			SetOptional<CreateAccordionProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AccordionProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, accordionProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let createAccordionPropKeys = defineKeyset<CreateAccordionProps>()([
	'id',
	'ids',
	'multiple',
	'collapsible',
	'value',
	'defaultValue',
	'disabled',
	'onValueChange',
	'onFocusChange',
	'orientation',
]);

let [createAccordionProps, localProps] = $derived(
	splitProps(accordionProps, createAccordionPropKeys),
);

let id = $props.id();
let accordion = createAccordion(() => ({id, ...createAccordionProps}));
let mergedProps = $derived(mergeProps(accordion().getRootProps(), localProps));

setAccordionContext(accordion);
setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, accordion)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(accordion)}</div>
{/if}
