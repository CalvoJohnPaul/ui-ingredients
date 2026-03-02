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
import {setAlertDialogContext} from './AlertDialogContext.svelte.js';
import type {
	CreateAlertDialogProps,
	CreateAlertDialogReturn,
} from './createAlertDialog.svelte.js';
import {createAlertDialog} from './createAlertDialog.svelte.js';

export interface AlertDialogProps
	extends SetOptional<CreateAlertDialogProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateAlertDialogReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: AlertDialogProps = $props();

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
let alertDialog = createAlertDialog(() => ({id, ...createDialogProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: alertDialog().open,
}));

setAlertDialogContext(alertDialog);
setPresenceContext(presence);
setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(alertDialog)}


