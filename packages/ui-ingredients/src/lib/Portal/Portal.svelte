<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {portal} from '@zag-js/svelte';
import {fromAction} from 'svelte/attachments';
import type {SvelteHTMLElements} from 'svelte/elements';
import type {Merge} from 'type-fest';
import {getEnvironmentContext} from '../EnvironmentProvider/index.js';
import {splitProps} from '../splitProps.js';
import {getPortalProviderPropsContext} from './PortalContext.svelte.js';

interface PortalActionProps {
	disabled?: boolean;
	container?: HTMLElement | null;
}

export interface PortalProps
	extends Merge<SvelteHTMLElements['div'], PortalActionProps> {}
</script>

<script lang="ts">
let {children, ...props}: PortalProps = $props();

let portalActionPropKeys = defineKeyset<PortalActionProps>()([
	'disabled',
	'container',
]);

let [portalActionProps, localProps] = $derived(
	splitProps(props, portalActionPropKeys),
);

let portalProviderProps = getPortalProviderPropsContext();
let environment = getEnvironmentContext();

let portalProps = $derived({
	container:
		portalActionProps.container ??
		portalProviderProps?.().container ??
		undefined,
	disabled: portalActionProps.disabled ?? false,
	getRootNode: environment?.().getRootNode,
});
</script>

<div
	{@attach fromAction(portal, () => portalProps)}
	data-ui-ingredients-portal=""
	{...localProps}
>
	{@render children?.()}
</div>
