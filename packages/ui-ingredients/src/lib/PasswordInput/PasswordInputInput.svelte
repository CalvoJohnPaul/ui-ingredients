<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getPasswordInputContext} from './PasswordInputContext.svelte.js';

export interface PasswordInputInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: PasswordInputInputProps = $props();

let passwordInput = getPasswordInputContext();
let mergedProps = $derived(mergeProps(passwordInput().getInputProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
