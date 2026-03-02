<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getFieldContext} from './FieldContext.svelte.js';

export interface FieldSelectProps
	extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: FieldSelectProps = $props();

let field = getFieldContext();
let mergedProps = $derived(mergeProps(field?.().getSelectProps() ?? {}, props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<select bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</select>
{/if}
