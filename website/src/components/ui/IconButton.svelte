<script lang="ts">
import type {Assign} from '$types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {splitProps} from 'ui-ingredients';
import {
	iconButtonRecipe,
	type IconButtonRecipeProps,
} from './IconButton.recipe';

let {
	children,
	...props
}: Assign<SvelteHTMLElements['button'], IconButtonRecipeProps> = $props();

let [recipeProps, localProps] = $derived(
	splitProps(props, iconButtonRecipe.variantKeys),
);
</script>

<button
	type="button"
	{...props}
	class={[iconButtonRecipe(recipeProps), localProps.class]}
>
	{@render children?.()}
</button>
