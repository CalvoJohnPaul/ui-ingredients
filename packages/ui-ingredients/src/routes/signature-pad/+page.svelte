<script lang="ts">
import {SignaturePad} from '$lib/index.js';
import RefreshIcon from '../@icons/RefreshIcon.svelte';
</script>

<SignaturePad.Root>
	{#snippet children(api)}
		<SignaturePad.Label>Signature</SignaturePad.Label>

		<SignaturePad.Control>
			<SignaturePad.Segment>
				{#each api().paths as path}
					<SignaturePad.SegmentPath {path} />
				{/each}

				<SignaturePad.CurrentSegmentPath />
			</SignaturePad.Segment>
			<SignaturePad.Guide />

			<SignaturePad.ClearTrigger>
				<RefreshIcon style="width:16px;height:16px;" />
			</SignaturePad.ClearTrigger>
		</SignaturePad.Control>
	{/snippet}
</SignaturePad.Root>
