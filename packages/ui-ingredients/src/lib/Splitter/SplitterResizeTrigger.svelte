<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {ResizeTriggerProps} from '@zag-js/splitter';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getSplitterContext} from './SplitterContext.svelte.js';

export interface SplitterResizeTriggerProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement>,
		ResizeTriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SplitterResizeTriggerProps = $props();

let resizeTriggerPropKeys = defineKeyset<ResizeTriggerProps>()([
	'id',
	'disabled',
]);

let [resizeTriggerProps, localProps] = $derived(
	splitProps(props, resizeTriggerPropKeys),
);

let splitter = getSplitterContext();
let mergedProps = $derived(
	mergeProps(splitter().getResizeTriggerProps(resizeTriggerProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


