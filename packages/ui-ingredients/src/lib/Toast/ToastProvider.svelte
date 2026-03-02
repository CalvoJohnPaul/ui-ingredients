<script lang="ts">
import type {Accessor} from '$lib/types.js';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';
import type {Snippet} from 'svelte';
import {setToastContext} from './ToastContext.svelte.js';

interface Props {
	index: number;
	toast: toast.Options;
	parent: toast.GroupService;
	children: Snippet<[toast: Accessor<toast.Api>]>;
}

let props: Props = $props();

let service = useMachine(toast.machine, () => ({
	...props.toast,
	index: props.index,
	parent: props.parent,
}));

let api = () => toast.connect(service, normalizeProps);

setToastContext(api);
</script>

{@render props.children?.(api)}
