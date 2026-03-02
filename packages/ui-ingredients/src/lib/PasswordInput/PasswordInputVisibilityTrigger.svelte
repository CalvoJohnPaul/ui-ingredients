<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getPasswordInputContext} from './PasswordInputContext.svelte.js';

export interface PasswordInputVisibilityTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PasswordInputVisibilityTriggerProps = $props();

let passwordInput = getPasswordInputContext();
let mergedProps = $derived(
	mergeProps(passwordInput().getVisibilityTriggerProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
