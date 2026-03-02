<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ResizeTriggerProps} from '@zag-js/floating-panel';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getFloatingPanelContext} from './FloatingPanelContext.svelte.js';

export interface FloatingPanelResizeTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		ResizeTriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FloatingPanelResizeTriggerProps = $props();

let resizeTriggerPropKeys: UnionToTuple<keyof ResizeTriggerProps> = ['axis'];
let [resizeTriggerProps, localProps] = $derived(
	splitProps(props, resizeTriggerPropKeys),
);

let floatingPanel = getFloatingPanelContext();
let mergedProps = $derived(
	mergeProps(
		floatingPanel().getResizeTriggerProps(resizeTriggerProps),
		localProps,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
