<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {Accessor} from '$lib/types.js';
import type {Snippet} from 'svelte';
import type {SetOptional} from 'type-fest';
import type {PresenceStrategyProps} from '../Presence/createPresence.svelte.js';
import {createPresence} from '../Presence/createPresence.svelte.js';
import {
	setPresenceContext,
	setPresenceStrategyPropsContext,
} from '../Presence/PresenceContext.svelte.js';
import type {
	CreateDrawerProps,
	CreateDrawerReturn,
} from './createDrawer.svelte.js';
import {createDrawer} from './createDrawer.svelte.js';
import {setDrawerContext} from './DrawerContext.svelte.js';

export interface DrawerProps
	extends SetOptional<CreateDrawerProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateDrawerReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: DrawerProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, createDialogProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let id = $props.id();
let drawer = createDrawer(() => ({id, ...createDialogProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: drawer().open,
}));

setDrawerContext(drawer);
setPresenceContext(presence);
setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(drawer)}


