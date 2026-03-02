<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {type Snippet} from 'svelte';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';

import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import type {Accessor} from '$lib/types.js';
import type {SetOptional} from 'type-fest';
import {
	createMenu,
	type CreateMenuProps,
	type CreateMenuReturn,
} from './createMenu.svelte.js';
import {
	getMenuContext,
	setMenuContext,
	setMenuTriggerItemContext,
} from './MenuContext.svelte.js';

export interface MenuRootProps
	extends SetOptional<CreateMenuProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateMenuReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: MenuRootProps = $props();

let presenceStrategyPropKeys = defineKeyset<PresenceStrategyProps>()([
	'lazyMount',
	'keepMounted',
	'animateOnMount',
	'onExitComplete',
]);

let [presenceStrategyProps, createMenuProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let parentMenu = getMenuContext();
let id = $props.id();
let menu = createMenu(() => ({id, ...createMenuProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: menu().open,
}));

setMenuContext(menu);
setPresenceContext(presence);
setMenuTriggerItemContext(
	() => parentMenu?.().getTriggerItemProps(menu()) ?? {},
);

if (parentMenu?.()) {
	parentMenu().setChild(menu().service);
	menu().setParent(parentMenu().service);
}
</script>

{@render children?.(menu)}


