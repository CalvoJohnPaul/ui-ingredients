<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
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
	CreateDialogProps,
	CreateDialogReturn,
} from './createDialog.svelte.js';
import {createDialog} from './createDialog.svelte.js';
import {setDialogContext} from './DialogContext.svelte.js';

export interface DialogProps
	extends SetOptional<CreateDialogProps, 'id'>,
		PresenceStrategyProps {
	children?: Snippet<[Accessor<CreateDialogReturn>]>;
}
</script>

<script lang="ts">
let {children, ...props}: DialogProps = $props();

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
let dialog = createDialog(() => ({id, ...createDialogProps}));
let presence = createPresence(() => ({
	...presenceStrategyProps,
	present: dialog().open,
}));

setDialogContext(dialog);
setPresenceContext(presence);
setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(dialog)}
