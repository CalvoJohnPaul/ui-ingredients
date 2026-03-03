<script lang="ts">
import type {Assign} from '$lib/types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {splitProps} from 'ui-ingredients';
import {textareaRecipe, type TextareaRecipeProps} from './textarea.recipe';

let {...props}: Assign<SvelteHTMLElements['textarea'], TextareaRecipeProps> =
	$props();

let [recipeProps, localProps] = $derived(
	splitProps(props, textareaRecipe.variantKeys),
);
</script>

<textarea
	{...props}
	class={[textareaRecipe(recipeProps), localProps]}
></textarea>
