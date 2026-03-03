<script lang="ts">
import type {Assign} from '$types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {splitProps} from 'ui-ingredients';
import {badgeRecipe, type BadgeRecipeProps} from './Badge.recipe';

let {children, ...props}: Assign<SvelteHTMLElements['span'], BadgeRecipeProps> =
	$props();

let [recipeProps, localProps] = $derived(
	splitProps(props, badgeRecipe.variantKeys),
);
</script>

<span {...props} class={[badgeRecipe(recipeProps), localProps.class]}>
	{@render children?.()}
</span>
