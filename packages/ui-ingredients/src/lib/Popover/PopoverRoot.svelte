<script lang="ts" module>
import {setPresenceContext} from '$lib/Presence/PresenceContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import type {Accessor} from '$lib/types.js';
import type {Snippet} from 'svelte';
import type {SetOptional, UnionToTuple} from 'type-fest';
import {
	createPresence,
	type PresenceStrategyProps,
} from '../Presence/createPresence.svelte.js';
import {
	createPopover,
	type CreatePopoverProps,
	type CreatePopoverReturn,
} from './createPopover.svelte.js';
import {setPopoverContext} from './PopoverContext.svelte.js';

export interface PopoverProps
	extends SetOptional<CreatePopoverProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreatePopoverReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: PopoverProps = $props();

let presenceStrategyPropKeys: UnionToTuple<keyof CreatePopoverProps> = [
	'id',
	'modal',
	'portalled',
	'autoFocus',
	'initialFocusEl',
	'closeOnInteractOutside',
	'closeOnEscape',
	'onOpenChange',
	'positioning',
	'open',
	'defaultOpen',
	'onEscapeKeyDown',
	'onRequestDismiss',
	'onPointerDownOutside',
	'onFocusOutside',
	'onInteractOutside',
	'persistentElements',
];

let [createPopoverProps, presenceStrategyProps] = $derived(
	splitProps(props, presenceStrategyPropKeys),
);

let id = $props.id();
let popover = createPopover(() => ({id, ...createPopoverProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: popover().open,
}));

setPopoverContext(popover);
setPresenceContext(presence);
</script>

{@render children?.(popover)}
