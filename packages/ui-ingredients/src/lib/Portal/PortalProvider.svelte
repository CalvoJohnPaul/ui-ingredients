<script lang="ts" module>
import type {Snippet} from 'svelte';
import {setPortalProviderPropsContext} from './PortalContext.svelte.js';

export interface PortalProviderProps {
	container?: HTMLElement | null;
	children?: Snippet;
}
</script>

<script lang="ts">
let {container, children}: PortalProviderProps = $props();

setPortalProviderPropsContext(() => ({container}));
</script>

{@render children?.()}
