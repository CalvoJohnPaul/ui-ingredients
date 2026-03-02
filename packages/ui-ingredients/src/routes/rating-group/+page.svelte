<script lang="ts">
import {RatingGroup} from '$lib/index.js';
import StarIcon from '../StarIcon.svelte';

let value = $state(1);

$inspect({value});
</script>

<RatingGroup.Root
	{value}
	onValueChange={(detail) => {
    value = detail.value;
  }}
>
	{#snippet children(api)}
		<RatingGroup.Label>Score</RatingGroup.Label>
		<RatingGroup.Control>
			{#each api().items as index}
				<RatingGroup.Item {index}>
					<StarIcon style="width:28px;height:28px;" />
				</RatingGroup.Item>
			{/each}
		</RatingGroup.Control>
	{/snippet}
</RatingGroup.Root>
