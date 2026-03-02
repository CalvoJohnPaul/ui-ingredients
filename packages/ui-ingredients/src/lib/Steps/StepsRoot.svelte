<script lang="ts" module>
import {setPresenceStrategyPropsContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	createSteps,
	type CreateStepsProps,
	type CreateStepsReturn,
} from './createSteps.svelte.js';
import {setStepsContext} from './StepsContext.svelte.js';

export interface StepsProps
	extends Merge<
			HtmlIngredientProps<'div', HTMLDivElement, CreateStepsReturn>,
			SetOptional<CreateStepsProps, 'id'>
		>,
		PresenceStrategyProps {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, children, ...props}: StepsProps = $props();

let presenceStrategyPropKeys: UnionToTuple<keyof PresenceStrategyProps> = [
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
];

let [presenceStrategyProps, stepsProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let createStepsPropKeys: UnionToTuple<keyof CreateStepsProps> = [
	'ids',
	'step',
	'defaultStep',
	'onStepChange',
	'onStepComplete',
	'linear',
	'orientation',
	'count',
	'isStepValid',
	'isStepSkippable',
	'onStepInvalid',
	'id',
];

let [createStepsProps, localProps] = $derived(
	splitProps(stepsProps, createStepsPropKeys),
);

let id = $props.id();
let steps = createSteps(() => ({id, ...createStepsProps}));
let mergedProps = $derived(mergeProps(steps().getRootProps(), localProps));

setStepsContext(steps);
setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, steps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(steps)}</div>
{/if}
