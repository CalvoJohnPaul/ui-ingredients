<script lang="ts" module>
export interface ToasterProps {
	label?: string;
	toaster: toast.Store;
	children: Snippet<[toast: Accessor<toast.Api>]>;
}
</script>

<script lang="ts">
import type {Accessor} from '$lib/types.js';
import {normalizeProps, portal, useMachine} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';
import type {Snippet} from 'svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';
import {getPortalProviderPropsContext} from '../Portal/PortalContext.svelte.js';
import ToastProvider from './ToastProvider.svelte';

let {label, toaster, children}: ToasterProps = $props();

let id = $props.id();
let locale = getLocaleContext();
let environment = getEnvironmentContext();
let portalProviderProps = getPortalProviderPropsContext();

let service = useMachine(toast.group.machine, () => ({
	id,
	dir: locale?.().dir,
	store: toaster,
	getRootNode: environment?.().getRootNode,
}));

let api = () => toast.group.connect(service, normalizeProps);
let toasts = $derived(api().getToasts());
</script>

<div
	use:portal={{
    disabled: false,
    container: portalProviderProps?.().container ?? undefined,
    getRootNode: environment?.().getRootNode,
  }}
	{...api().getGroupProps({label})}
>
	{#each toasts as toast, index (toast.id)}
		<ToastProvider {index} {children} {toast} parent={service} />
	{/each}
</div>
