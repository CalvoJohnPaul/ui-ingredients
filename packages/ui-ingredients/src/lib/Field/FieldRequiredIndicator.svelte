<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getFieldContext} from './FieldContext.svelte.js';

export interface FieldRequiredIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FieldRequiredIndicatorProps = $props();

let field = getFieldContext();
let mergedProps = $derived(
	mergeProps(field?.().getRequiredIndicatorProps() ?? {}, props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			*
		{/if}
	</span>
{/if}
