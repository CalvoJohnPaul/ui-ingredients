<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAvatarContext} from './AvatarContext.svelte.js';

export interface AvatarFallbackProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AvatarFallbackProps = $props();

let avatar = getAvatarContext();
let mergedProps = $derived(mergeProps(avatar().getFallbackProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
