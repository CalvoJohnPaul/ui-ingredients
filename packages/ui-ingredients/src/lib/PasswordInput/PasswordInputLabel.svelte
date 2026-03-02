<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getPasswordInputContext} from './PasswordInputContext.svelte.js';

export interface PasswordInputLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PasswordInputLabelProps = $props();

let passwordInput = getPasswordInputContext();
let mergedProps = $derived(mergeProps(passwordInput().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}> {@render children?.()} </label>
{/if}
