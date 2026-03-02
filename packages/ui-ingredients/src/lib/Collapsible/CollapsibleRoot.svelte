<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import {createPresence} from '../Presence/createPresence.svelte.js';
import {setPresenceContext} from '../Presence/PresenceContext.svelte.js';
import {splitProps} from '../splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {setCollapsibleContext} from './CollapsibleContext.svelte.js';
import type {
	CreateCollapsibleProps,
	CreateCollapsibleReturn,
} from './createCollapsible.svelte.js';
import {createCollapsible} from './createCollapsible.svelte.js';

export interface CollapsibleProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateCollapsibleReturn>,
			SetOptional<CreateCollapsibleProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CollapsibleProps = $props();

let presenceStrategyPropKeys = defineKeyset<
	Omit<PresenceStrategyProps, 'onExitComplete'>
>()(['lazyMount', 'keepMounted', 'animateOnMount']);

let [presenceStrategyProps, collapsibleProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let collapsiblePropKeys = defineKeyset<CreateCollapsibleProps>()([
	'id',
	'ids',
	'open',
	'defaultOpen',
	'onOpenChange',
	'onExitComplete',
	'disabled',
	'collapsedHeight',
	'collapsedWidth',
]);

let [createCollapsibleProps, localProps] = $derived(
	splitProps(collapsibleProps, collapsiblePropKeys),
);

let id = $props.id();
let collapsible = createCollapsible(() => ({id, ...createCollapsibleProps}));
let presence = createPresence(() => ({
	present: collapsible().open,
	...presenceStrategyProps,
}));

let mergedProps = $derived(
	mergeProps(collapsible().getRootProps(), localProps),
);

setCollapsibleContext(collapsible);
setPresenceContext(presence);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, collapsible)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(collapsible)}</div>
{/if}
