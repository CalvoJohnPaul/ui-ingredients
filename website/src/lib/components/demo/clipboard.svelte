<script lang="ts">
import IconButton from '$lib/components/ui/icon-button.svelte';
import Input from '$lib/components/ui/input.svelte';
import Label from '$lib/components/ui/label.svelte';
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
import {Clipboard} from 'ui-ingredients';
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
					<Clipboard.Indicator class="size-5">
						{#snippet asChild(props, ctx)}
							{#if ctx().copied}
								<CheckIcon {...props()} />
							{:else}
								<Copy01Icon {...props()} />
							{/if}
						{/snippet}
					</Clipboard.Indicator>
				</IconButton>
			{/snippet}
		</Clipboard.Trigger>
	</Clipboard.Control>
</Clipboard.Root>
