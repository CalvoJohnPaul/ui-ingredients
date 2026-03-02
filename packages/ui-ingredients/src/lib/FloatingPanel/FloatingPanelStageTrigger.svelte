<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {StageTriggerProps} from '@zag-js/floating-panel';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getFloatingPanelContext} from './FloatingPanelContext.svelte.js';

export interface FloatingPanelStageTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		StageTriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FloatingPanelStageTriggerProps = $props();

let stageTriggerPropKeys: UnionToTuple<keyof StageTriggerProps> = ['stage'];
let [stageTriggerProps, localProps] = $derived(
	splitProps(props, stageTriggerPropKeys),
);

let floatingPanel = getFloatingPanelContext();
let mergedProps = $derived(
	mergeProps(
		floatingPanel().getStageTriggerProps(stageTriggerProps),
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
