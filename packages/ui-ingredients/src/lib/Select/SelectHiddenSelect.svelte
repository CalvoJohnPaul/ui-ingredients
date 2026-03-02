<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSelectContext} from './SelectContext.svelte.js';

export interface SelectHiddenSelectProps
	extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SelectHiddenSelectProps = $props();

let select = getSelectContext();
let mergedProps = $derived(mergeProps(select().getHiddenSelectProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<select bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</select>
{/if}
