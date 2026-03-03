<script lang="ts">
import type {Assign} from '$types';
import type {SvelteHTMLElements} from 'svelte/elements';
import {mergeProps} from 'ui-ingredients';
import {createTable, type CreateTableProps} from './createTable.svelte';
import {setTableContext} from './TableContext.svelte';

let {
	variant,
	children,
	...props
}: Assign<SvelteHTMLElements['table'], CreateTableProps> = $props();

let table = createTable(() => ({variant}));
let mergedProps = $derived(mergeProps(props, table().getRootProps()));

setTableContext(table);
</script>

<table {...mergedProps}>
	{@render children?.()}
</table>
