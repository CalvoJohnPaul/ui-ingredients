<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import {setPresenceStrategyPropsContext} from '../Presence/PresenceContext.svelte.js';
import {splitProps} from '../splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {setAccordionContext} from './AccordionContext.svelte.js';
import {
	createAccordion,
	type CreateAccordionProps,
	type CreateAccordionReturn,
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

let presentStrategyPropKeys: UnionToTuple<keyof PresenceStrategyProps> = [
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
];

let [presenceStrategyProps, accordionProps] = $derived(
	splitProps(props, presentStrategyPropKeys),
);

let createAccordionPropKeys: UnionToTuple<keyof CreateAccordionProps> = [
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
];

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
