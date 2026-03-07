<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {PanelProps} from '@zag-js/splitter';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getSplitterContext} from './SplitterContext.svelte.js';

export interface SplitterPanelProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, PanelProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SplitterPanelProps = $props();

let panelPropKeys = defineKeyset<PanelProps>()(['id']);
let [panelProps, localProps] = $derived(splitProps(props, panelPropKeys));
let splitter = getSplitterContext();
let mergedProps = $derived(
	mergeProps(splitter().getPanelProps(panelProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
