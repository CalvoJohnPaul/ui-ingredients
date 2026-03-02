<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {TriggerProps} from '@zag-js/combobox';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getComboboxContext} from './ComboboxContext.svelte.js';

export interface ComboboxTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		TriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ComboboxTriggerProps = $props();

let triggerPropKeys = defineKeyset<TriggerProps>()(['focusable']);
let [triggerProps, localProps] = $derived(splitProps(props, triggerPropKeys));

let combobox = getComboboxContext();
let mergedProps = $derived(
	mergeProps(combobox().getTriggerProps(triggerProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}


