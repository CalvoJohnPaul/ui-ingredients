<script lang="ts">
import {NumberInput} from '$lib/index.js';
import ChevronDownIcon from '../@icons/ChevronDownIcon.svelte';
import ChevronUpIcon from '../@icons/ChevronUpIcon.svelte';

let value = $state('0');

$inspect({value});
</script>

<NumberInput.Root
	min={0}
	max={100}
	{value}
	onValueChange={(detail) => {
    value = detail.value;
  }}
	allowMouseWheel
>
	<NumberInput.Label>Label</NumberInput.Label>
	<NumberInput.Control>
		<NumberInput.Input />
		<NumberInput.IncrementTrigger>
			<ChevronUpIcon style="width:16px;height:16px;" />
		</NumberInput.IncrementTrigger>
		<NumberInput.DecrementTrigger>
			<ChevronDownIcon style="width:16px;height:16px;" />
		</NumberInput.DecrementTrigger>
	</NumberInput.Control>
</NumberInput.Root>
