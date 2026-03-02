<script lang="ts" module>
import type {Snippet} from 'svelte';

export interface EnvironmentProviderProps {
	rootNode?:
		| ShadowRoot
		| Document
		| Node
		| (() => ShadowRoot | Document | Node);
	children: Snippet;
}
</script>

<script lang="ts">
import {getDocument, getWindow} from '@zag-js/dom-query';
import {isFunction} from 'es-toolkit';
import {setEnvironmentContext} from './EnvironmentProviderContext.svelte.js';

let {rootNode, children}: EnvironmentProviderProps = $props();

let elem: HTMLSpanElement | null = $state(null);

function getRootNode() {
	if (rootNode) {
		return isFunction(rootNode) ? rootNode() : rootNode;
	} else {
		return elem?.ownerDocument ?? document;
	}
}

setEnvironmentContext(() => ({
	getRootNode,
	getDocument: () => getDocument(getRootNode()),
	getWindow: () => getWindow(getRootNode()),
}));
</script>

{@render children()}

{#if !rootNode}
	<span bind:this={elem} hidden></span>
{/if}
