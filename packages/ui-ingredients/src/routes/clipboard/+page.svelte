<script lang="ts">
import {Clipboard} from '$lib/index.js';
import CheckIcon from '../CheckIcon.svelte';
import CopyIcon from '../CopyIcon.svelte';

let value = $state('UI Ingredients');

$inspect({value});
</script>

<Clipboard.Root
	{value}
	onValueChange={(detail) => {
    value = detail.value;
  }}
>
	<Clipboard.Label>Token</Clipboard.Label>
	<Clipboard.Control>
		<Clipboard.Input />
		<Clipboard.Trigger>
			<Clipboard.Indicator>
				{#snippet children(api)}
					{#if api().copied}
						<CheckIcon
							style="width:20px;height:20px;color:var(--color-success);"
						/>
					{:else}
						<CopyIcon style="width:20px;height:20px;" />
					{/if}
				{/snippet}
			</Clipboard.Indicator>
		</Clipboard.Trigger>
	</Clipboard.Control>
</Clipboard.Root>
