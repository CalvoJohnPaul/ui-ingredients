<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getPasswordInputContext} from './PasswordInputContext.svelte.js';

export interface PasswordInputIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PasswordInputIndicatorProps = $props();

let passwordInput = getPasswordInputContext();
let mergedProps = $derived(
	mergeProps(passwordInput().getIndicatorProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
