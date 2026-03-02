<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import {omit} from 'es-toolkit';
import {createPresence} from '../Presence/createPresence.svelte.js';
import {getPresenceStrategyPropsContext} from '../Presence/PresenceContext.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {getAlertDialogContext} from './AlertDialogContext.svelte.js';

export interface AlertDialogBackdropProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AlertDialogBackdropProps = $props();

let alertDialog = getAlertDialogContext();
let presenceStrategyProps = getPresenceStrategyPropsContext();
let presence = createPresence(() => ({
	...omit(presenceStrategyProps(), ['onExitComplete']),
	present: alertDialog().open,
}));

let mergedProps = $derived(
	mergeProps(
		alertDialog().getBackdropProps(),
		presence().getPresenceProps(),
		props,
	),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
