<script lang="ts">
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
import {Clipboard} from 'ui-ingredients';
import IconButton from '$components/ui/IconButton.svelte';
import Input from '$components/ui/Input.svelte';
import Label from '$components/ui/Label.svelte';
</script>

<Clipboard.Root value="UI Ingredients" class="mx-auto max-w-[20rem]">
	<Clipboard.Label>
		{#snippet asChild(props)}
			<Label {...props()}>Label</Label>
		{/snippet}
	</Clipboard.Label>

	<Clipboard.Control class="flex gap-2">
		<Clipboard.Input class="grow">
			{#snippet asChild(props)}
				<Input {...props()} />
			{/snippet}
		</Clipboard.Input>
		<Clipboard.Trigger
			class="ui-copied:text-green-600 dark:ui-copied:text-green-500"
		>
			{#snippet asChild(props)}
				<IconButton {...props()}>
					<Clipboard.Indicator>
						{#snippet asChild(props, state)}
							{#if state().copied}
								<CheckIcon {...props()} class="size-5" />
							{:else}
								<Copy01Icon {...props()} class="size-5" />
							{/if}
						{/snippet}
					</Clipboard.Indicator>
				</IconButton>
			{/snippet}
		</Clipboard.Trigger>
	</Clipboard.Control>
</Clipboard.Root>
