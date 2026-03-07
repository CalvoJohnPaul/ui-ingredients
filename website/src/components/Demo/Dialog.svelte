<script lang="ts">
import {XCloseIcon} from '@untitled-theme/icons-svelte';
import {Dialog, Field, Portal} from 'ui-ingredients';
import Button from '$components/ui/Button.svelte';
import Input from '$components/ui/Input.svelte';
import Label from '$components/ui/Label.svelte';
</script>

<Dialog.Root lazyMount>
	<Dialog.Trigger class="mx-auto w-auto">
		{#snippet asChild(props)}
			<Button variant="outline" {...props()}>Open dialog</Button>
		{/snippet}
	</Dialog.Trigger>

	<Portal>
		<Dialog.Backdrop
			class="ui-open:animate-backdrop-in ui-closed:animate-backdrop-out fixed inset-0 bg-white/50 backdrop-blur dark:bg-black/50"
		/>

		<Dialog.Positioner>
			<Dialog.Content
				class="ui-open:animate-dialog-in ui-closed:animate-dialog-out fixed top-0 h-full w-full border border-neutral-200 bg-white p-5 lg:left-1/2 lg:top-16 lg:h-auto lg:w-[24rem] lg:-translate-x-1/2 lg:rounded lg:p-8 dark:border-neutral-800 dark:bg-neutral-900"
			>
				<Dialog.CloseTrigger class="absolute right-4 top-4">
					<XCloseIcon />
				</Dialog.CloseTrigger>

				<h2 class="text-2xl font-bold">Sign In</h2>
				<p class="text-neutral-600 dark:text-neutral-400">
					Sign in to continue using the app
				</p>

				<form
					onsubmit={(e) => {
            e.preventDefault();
          }}
					class="mt-8"
				>
					<Field.Root>
						<Field.Label>
							{#snippet asChild(props)}
								<Label {...props()}>Email</Label>
							{/snippet}
						</Field.Label>
						<Field.Input>
							{#snippet asChild(props)}
								<Input type="email" placeholder="Email" {...props()} />
							{/snippet}
						</Field.Input>
					</Field.Root>
					<Field.Root class="mt-4">
						<Field.Label>
							{#snippet asChild(props)}
								<Label {...props()}>Password</Label>
							{/snippet}
						</Field.Label>
						<Field.Input>
							{#snippet asChild(props)}
								<Input type="password" placeholder="Password" {...props()} />
							{/snippet}
						</Field.Input>
					</Field.Root>

					<Button type="submit" fullWidth class="mt-8">Sign In</Button>
				</form>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog.Root>
