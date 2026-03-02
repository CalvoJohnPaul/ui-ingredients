<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ViewProps} from '@zag-js/progress';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getProgressContext} from './ProgressContext.svelte.js';

export interface ProgressViewProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ViewProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ProgressViewProps = $props();

let viewPropKeys: UnionToTuple<keyof ViewProps> = ['state'];
let [viewProps, localProps] = $derived(splitProps(props, viewPropKeys));

let progress = getProgressContext();
let mergedProps = $derived(
	mergeProps(progress().getViewProps(viewProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
