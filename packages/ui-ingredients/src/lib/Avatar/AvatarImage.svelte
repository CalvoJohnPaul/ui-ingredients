<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getAvatarContext} from './AvatarContext.svelte.js';

export interface AvatarImageProps
	extends HtmlIngredientProps<'img', HTMLImageElement> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: AvatarImageProps = $props();

let avatar = getAvatarContext();
let mergedProps = $derived(mergeProps(avatar().getImageProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<img alt="" bind:this={ref} {...mergedProps}>
{/if}
