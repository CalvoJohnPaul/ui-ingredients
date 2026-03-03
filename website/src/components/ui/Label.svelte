<script lang="ts">
import type {Assign} from '$types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {splitProps} from 'ui-ingredients';
import {labelRecipe, type LabelRecipeProps} from './Label.recipe';

let {
	children,
	...props
}: Assign<SvelteHTMLElements['label'], LabelRecipeProps> = $props();

let [recipeProps, localProps] = $derived(
	splitProps(props, labelRecipe.variantKeys),
);
</script>

<label {...props} class={[labelRecipe(recipeProps), localProps.class]}>
	{@render children?.()}
</label>
