<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {ActionTriggerProps} from '@zag-js/timer';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getTimerContext} from './TimerContext.svelte.js';

export interface TimerActionTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		ActionTriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TimerActionTriggerProps = $props();

let actionTriggerPropKeys = defineKeyset<ActionTriggerProps>()(['action']);
let [actionTriggerProps, localProps] = $derived(
	splitProps(props, actionTriggerPropKeys),
);

let timer = getTimerContext();
let mergedProps = $derived(
	mergeProps(timer().getActionTriggerProps(actionTriggerProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
