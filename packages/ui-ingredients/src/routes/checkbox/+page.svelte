<script lang="ts">
import {Checkbox, Field} from '$lib/index.js';
import CheckIcon from '../CheckIcon.svelte';

let checked = $state(false);

$inspect({checked});
</script>

<Field.Root>
	<Checkbox.Root
		{checked}
		onCheckedChange={(detail) => {
      if (detail.checked === 'indeterminate') return;

      checked = detail.checked;
    }}
	>
		<Checkbox.Control>
			<Checkbox.Indicator>
				<CheckIcon style="width:18px;height:18px;" />
			</Checkbox.Indicator>
		</Checkbox.Control>
		<Checkbox.Label>I accept the terms and conditions</Checkbox.Label>
		<Checkbox.HiddenInput />
	</Checkbox.Root>
</Field.Root>
