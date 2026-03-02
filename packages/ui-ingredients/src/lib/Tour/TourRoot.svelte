<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {
	setPresenceContext,
	setPresenceStrategyPropsContext,
} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import type {Snippet} from 'svelte';
import type {SetOptional} from 'type-fest';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';
import type {Accessor} from '../types.js';
import {
	createTour,
	type CreateTourProps,
	type CreateTourReturn,
} from './createTour.svelte.js';
import {setTourContext} from './TourContext.svelte.js';

export interface TourProps
	extends SetOptional<CreateTourProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateTourReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: TourProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, createTourProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let id = $props.id();
let tour = createTour(() => ({id, ...createTourProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: tour().open,
}));

setTourContext(tour);
setPresenceContext(presence);
setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(tour)}


