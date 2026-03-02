<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {HighlightWordProps} from '@zag-js/highlight-word';
import {highlightWord} from '@zag-js/highlight-word';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';

export interface HighlightProps
	extends Merge<
		Omit<HtmlIngredientProps<'div', HTMLDivElement>, 'children'>,
		HighlightWordProps
	> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: HighlightProps = $props();

let highlightWordPropKeys: UnionToTuple<keyof HighlightWordProps> = [
	'text',
	'query',
	'ignoreCase',
	'matchAll',
	'exactMatch',
];

let [highlightWordProps, localProps] = $derived(
	splitProps(props, highlightWordPropKeys),
);

let chunks = $derived(highlightWord(highlightWordProps));
</script>

{#if asChild}
	{@render asChild(() => localProps)}
{:else}
	<div bind:this={ref} {...localProps}>
		{#each chunks as chunk}
			{#if chunk.match}
				<mark>{chunk.text}</mark>
			{:else}
				{chunk.text}
			{/if}
		{/each}
	</div>
{/if}
