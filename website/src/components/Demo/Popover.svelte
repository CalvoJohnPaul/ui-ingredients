<script lang="ts">
import {Popover, Portal} from 'ui-ingredients';
import Button from '$components/ui/Button.svelte';
</script>

<Popover.Root
	lazyMount
	positioning={{
    placement: 'bottom',
  }}
>
	<Popover.Trigger class="mx-auto w-auto">
		{#snippet asChild(props)}
			<Button variant="outline" {...props()}>Toggle popover</Button>
		{/snippet}
	</Popover.Trigger>

	<Portal>
		<Popover.Positioner>
			<Popover.Content
				class={[
					'w-[80vw]',
					'rounded',
					'border',
					'border-neutral-200',
					'bg-white',
					'p-4',
					'dark:border-neutral-800',
					'dark:bg-neutral-900',
					'lg:w-[20rem]',
					
						'ui-placement-bottom:ui-open:animate-popover-in-bottom',
					'ui-placement-bottom-start:ui-open:animate-popover-in-bottom',
					'ui-placement-bottom-end:ui-open:animate-popover-in-bottom',
					'ui-placement-bottom:ui-closed:animate-popover-out-bottom',
					'ui-placement-bottom-start:ui-closed:animate-popover-out-bottom',
					'ui-placement-bottom-end:ui-closed:animate-popover-out-bottom',

					'ui-placement-top:ui-open:animate-popover-in-top',
					'ui-placement-top-start:ui-open:animate-popover-in-top',
					'ui-placement-top-end:ui-open:animate-popover-in-top',
					'ui-placement-top:ui-closed:animate-popover-out-top',
					'ui-placement-top-start:ui-closed:animate-popover-out-top',
					'ui-placement-top-end:ui-closed:animate-popover-out-top',

					'ui-placement-left:ui-open:animate-popover-in-left',
					'ui-placement-left-start:ui-open:animate-popover-in-left',
					'ui-placement-left-end:ui-open:animate-popover-in-left',
					'ui-placement-left:ui-closed:animate-popover-out-left',
					'ui-placement-left-start:ui-closed:animate-popover-out-left',
					'ui-placement-left-end:ui-closed:animate-popover-out-left',

					'ui-placement-right:ui-open:animate-popover-in-right',
					'ui-placement-right-start:ui-open:animate-popover-in-right',
					'ui-placement-right-end:ui-open:animate-popover-in-right',
					'ui-placement-right:ui-closed:animate-popover-out-right',
					'ui-placement-right-start:ui-closed:animate-popover-out-right',
					'ui-placement-right-end:ui-closed:animate-popover-out-right',
				]}
			>
				<Popover.Arrow
					class="[--arrow-background:var(--color-white)] [--arrow-size:--spacing(4)] dark:[--arrow-background:var(--color-neutral-900)]"
				>
					<Popover.ArrowTip />
				</Popover.Arrow>

				<Popover.Title class="text-lg font-medium block">Title</Popover.Title>
				<Popover.Description
					class="block text-neutral-600 dark:text-neutral-400"
				>
					Description
				</Popover.Description>
				<Popover.CloseTrigger class="mt-3">
					{#snippet asChild(props)}
						<Button {...props()} fullWidth variant="outline">Close</Button>
					{/snippet}
				</Popover.CloseTrigger>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover.Root>
