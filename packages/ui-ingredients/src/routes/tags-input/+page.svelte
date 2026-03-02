<script lang="ts">
import {TagsInput} from '$lib/index.js';
import XIcon from '../XIcon.svelte';

let value = $state(['Hello']);

$inspect({value});
</script>

<TagsInput.Root
	{value}
	onValueChange={(detail) => {
    value = detail.value;
  }}
>
	{#snippet children(api)}
		<TagsInput.Label>Label</TagsInput.Label>

		<TagsInput.Control>
			<div style="display:flex;gap:6px;">
				<TagsInput.Input placeholder="Placeholder" />
				<TagsInput.ClearTrigger>
					<XIcon style="width:20px;height:20px;" />
				</TagsInput.ClearTrigger>
			</div>

			<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
				{#each api().value as value, index}
					<TagsInput.Item {index} {value}>
						<TagsInput.ItemPreview>
							<TagsInput.ItemText>{value}</TagsInput.ItemText>
							<TagsInput.ItemDeleteTrigger>
								<XIcon style="width:14px;height:14px;" />
							</TagsInput.ItemDeleteTrigger>
						</TagsInput.ItemPreview>
						<TagsInput.ItemInput />
					</TagsInput.Item>
				{/each}
			</div>
		</TagsInput.Control>

		<TagsInput.HiddenInput />
	{/snippet}
</TagsInput.Root>
