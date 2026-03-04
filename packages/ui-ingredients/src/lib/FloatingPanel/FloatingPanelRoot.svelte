<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import type {Snippet} from 'svelte';
import type {SetOptional} from 'type-fest';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';
import type {Accessor} from '../types.js';
import type {
	CreateFloatingPanelProps,
	CreateFloatingPanelReturn,
} from './createFloatingPanel.svelte.js';
import {createFloatingPanel} from './createFloatingPanel.svelte.js';
import {setFloatingPanelContext} from './FloatingPanelContext.svelte.js';

export interface FloatingPanelProps
	extends SetOptional<CreateFloatingPanelProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateFloatingPanelReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: FloatingPanelProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, createFloatingPanelProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let id = $props.id();
let floatingPanel = createFloatingPanel(() => ({
	id,
	...createFloatingPanelProps,
}));

let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: floatingPanel().open,
}));

setFloatingPanelContext(floatingPanel);
setPresenceContext(presence);
</script>

{@render children?.(floatingPanel)}
