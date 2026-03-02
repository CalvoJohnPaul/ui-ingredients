<script lang="ts" module>
import {portal} from '@zag-js/svelte';
import type {SvelteHTMLElements} from 'svelte/elements';
import type {Merge, UnionToTuple} from 'type-fest';
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

let portalActionPropKeys: UnionToTuple<keyof PortalActionProps> = [
	'disabled',
	'container',
];

let [portalActionProps, localProps] = $derived(
	splitProps(props, portalActionPropKeys),
);

let portalProviderProps = getPortalProviderPropsContext();
let environment = getEnvironmentContext();
</script>

<div
	use:portal={{
    container:
      portalActionProps.container ??
      portalProviderProps?.().container ??
      undefined,
    disabled: portalActionProps.disabled ?? false,
    getRootNode: environment?.().getRootNode,
  }}
	{...localProps}
>
	{@render children?.()}
</div>
