<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {ContentProps} from '@zag-js/tabs';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getTabsContext} from './TabsContext.svelte.js';

export interface TabsContentProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ContentProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TabsContentProps = $props();

let contentPropKeys = defineKeyset<ContentProps>()(['value']);
let [contentProps, localProps] = $derived(splitProps(props, contentPropKeys));

let tabs = getTabsContext();
let mergedProps = $derived(
	mergeProps(tabs().getContentProps(contentProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


