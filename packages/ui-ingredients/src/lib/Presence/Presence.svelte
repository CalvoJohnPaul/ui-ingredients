<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import {splitProps} from '../splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import type {CreatePresenceProps} from './createPresence.svelte.js';
import {createPresence} from './createPresence.svelte.js';

export interface PresenceProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement>,
		CreatePresenceProps
	> {}
</script>

<script lang="ts">
let {asChild, children, ...props}: PresenceProps = $props();

let [createPresenceProps, localProps] = $derived(
	splitProps(props, [
		'immediate',
		'keepMounted',
		'lazyMount',
		'present',
		'onExitComplete',
	]),
);

let presence = createPresence(() => createPresenceProps);
let mergedProps = $derived(
	mergeProps(presence().getPresenceProps(), localProps),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
