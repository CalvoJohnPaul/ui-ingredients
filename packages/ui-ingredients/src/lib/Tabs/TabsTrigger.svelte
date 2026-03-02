<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {TriggerProps} from '@zag-js/tabs';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getTabsContext} from './TabsContext.svelte.js';

interface TriggerState {
	selected: boolean;
	focused: boolean;
	disabled: boolean;
}

export interface TabsTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement, TriggerState>,
		TriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TabsTriggerProps = $props();

let triggerPropKeys: UnionToTuple<keyof TriggerProps> = ['value', 'disabled'];
let [triggerProps, localProps] = $derived(splitProps(props, triggerPropKeys));

let tabs = getTabsContext();
let triggerState = () => tabs().getTriggerState(triggerProps);
let mergedProps = $derived(
	mergeProps(tabs().getTriggerProps(triggerProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, triggerState)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.(triggerState)}
	</button>
{/if}
