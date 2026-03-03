<script lang="ts">
import type {Assign} from '$types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {splitProps} from 'ui-ingredients';
import {textareaRecipe, type TextareaRecipeProps} from './Textarea.recipe';

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
