<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import type {Accessor} from '$lib/types.js';
import type {Snippet} from 'svelte';
import type {SetOptional} from 'type-fest';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';
import type {
	CreateHoverCardProps,
	CreateHoverCardReturn,
} from './createHoverCard.svelte.js';
import {createHoverCard} from './createHoverCard.svelte.js';
import {setHoverCardContext} from './HoverCardContext.svelte.js';

export interface HoverCardProps
	extends SetOptional<CreateHoverCardProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateHoverCardReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: HoverCardProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, createHoverCardProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let id = $props.id();
let hoverCard = createHoverCard(() => ({id, ...createHoverCardProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: hoverCard().open,
}));

setHoverCardContext(hoverCard);
setPresenceContext(presence);
</script>

{@render children?.(hoverCard)}
