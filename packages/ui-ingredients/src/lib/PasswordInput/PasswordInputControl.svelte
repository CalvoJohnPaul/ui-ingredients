<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getPasswordInputContext} from './PasswordInputContext.svelte.js';

export interface PasswordInputControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PasswordInputControlProps = $props();

let passwordInput = getPasswordInputContext();
let mergedProps = $derived(
	mergeProps(passwordInput().getControlProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
