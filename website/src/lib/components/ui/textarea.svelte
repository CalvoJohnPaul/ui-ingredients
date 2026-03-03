<script lang="ts">
import type {Assign} from '$lib/types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {textareaRecipe, type TextareaRecipeProps} from './textarea.recipe';

let {...props}: Assign<SvelteHTMLElements['textarea'], TextareaRecipeProps> =
	$props();

let [recipeProps, localProps] = $derived(
	createSplitProps<TextareaRecipeProps>(textareaRecipe.variantKeys)(props),
);
</script>

<textarea
	{...props}
	class={[textareaRecipe(recipeProps), localProps]}
></textarea>
