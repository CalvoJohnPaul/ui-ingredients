<script lang="ts">
import type {Assign} from '$types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {splitProps} from 'ui-ingredients';
import {inputRecipe, type InputRecipeProps} from './Input.recipe';

let {
	value = $bindable(''),
	...props
}: Assign<SvelteHTMLElements['input'], InputRecipeProps> = $props();

let [recipeProps, localProps] = $derived(
	splitProps(props, inputRecipe.variantKeys),
);
</script>

<input
	type="text"
	bind:value
	{...localProps}
	class={[inputRecipe(recipeProps), props.class]}
>
