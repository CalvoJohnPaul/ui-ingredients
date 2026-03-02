<script lang="ts">
import {PasswordInput} from '$lib/index.js';
import EyeIcon from '../EyeIcon.svelte';
import EyeOffIcon from '../EyeOffIcon.svelte';

let value: string[] = $state([]);

$inspect(value);
</script>

<PasswordInput.Root>
	{#snippet children(api)}
		<PasswordInput.Label>Label</PasswordInput.Label>
		<PasswordInput.Control>
			<PasswordInput.Input />
			<PasswordInput.VisibilityTrigger>
				<PasswordInput.Indicator>
					{#if api().visible}
						<EyeIcon style="width:20px;height:20px;" />
					{:else}
						<EyeOffIcon style="width:20px;height:20px;" />
					{/if}
				</PasswordInput.Indicator>
			</PasswordInput.VisibilityTrigger>
		</PasswordInput.Control>
	{/snippet}
</PasswordInput.Root>
