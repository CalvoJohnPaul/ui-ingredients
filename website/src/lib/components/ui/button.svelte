<script lang="ts">
import type {Assign} from '$lib/types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {splitProps} from 'ui-ingredients';
import {buttonRecipe, type ButtonRecipeProps} from './button.recipe';

let {
	children,
	...props
}: Assign<SvelteHTMLElements['button'], ButtonRecipeProps> = $props();

let [recipeProps, localProps] = $derived(
	splitProps(props, buttonRecipe.variantKeys),
);
</script>

<button
	type="button"
	{...props}
	class={[buttonRecipe(recipeProps), localProps.class]}
>
	{@render children?.()}
</button>
