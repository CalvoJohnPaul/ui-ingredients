<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import {createPresence} from '../Presence/createPresence.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {getFieldContext} from './FieldContext.svelte.js';

export interface FieldErrorTextProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FieldErrorTextProps = $props();

let field = getFieldContext();
let presence = createPresence(() => ({
	present: field?.().invalid ?? true,
	lazyMount: true,
	keepMounted: false,
}));

let mergedProps = $derived(
	mergeProps(
		field?.().getErrorTextProps() ?? {},
		presence().getPresenceProps(),
		props,
	),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
