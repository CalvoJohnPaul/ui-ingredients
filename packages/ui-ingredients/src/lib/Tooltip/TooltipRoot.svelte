<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {Accessor} from '$lib/types.js';
import type {Snippet} from 'svelte';
import type {SetOptional} from 'type-fest';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import {createPresence} from '../Presence/createPresence.svelte.js';
import {setPresenceContext} from '../Presence/PresenceContext.svelte.js';
import {
	createTooltip,
	type CreateTooltipProps,
	type CreateTooltipReturn,
} from './createTooltip.svelte.js';
import {setTooltipContext} from './TooltipContext.svelte.js';

export interface TooltipProps
	extends SetOptional<CreateTooltipProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateTooltipReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: TooltipProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, createTooltipProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let id = $props.id();
let tooltip = createTooltip(() => ({id, ...createTooltipProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: tooltip().open,
}));

setTooltipContext(tooltip);
setPresenceContext(presence);
</script>

{@render children?.(tooltip)}
