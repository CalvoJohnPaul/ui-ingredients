<script lang="ts">
import Button from '$components/ui/Button.svelte';
import Input from '$components/ui/Input.svelte';
import Label from '$components/ui/Label.svelte';
import {EyeIcon, EyeOffIcon} from '@untitled-theme/icons-svelte';
import {PasswordInput} from 'ui-ingredients';
</script>

<PasswordInput.Root>
	{#snippet children(api)}
		<PasswordInput.Label>
			{#snippet asChild(props)}
				<Label {...props()}>Label</Label>
			{/snippet}
		</PasswordInput.Label>
		<PasswordInput.Control class="flex">
			<PasswordInput.Input class="rounded-r-none border-r-0 outline-none">
				{#snippet asChild(props)}
					<Input {...props()} />
				{/snippet}
			</PasswordInput.Input>
			<PasswordInput.VisibilityTrigger class="rounded-l-none outline-none">
				{#snippet asChild(props)}
					<Button {...props()} variant="outline">
						<PasswordInput.Indicator>
							{#if api().visible}
								<EyeIcon />
							{:else}
								<EyeOffIcon />
							{/if}
						</PasswordInput.Indicator>
					</Button>
				{/snippet}
			</PasswordInput.VisibilityTrigger>
		</PasswordInput.Control>
	{/snippet}
</PasswordInput.Root>
