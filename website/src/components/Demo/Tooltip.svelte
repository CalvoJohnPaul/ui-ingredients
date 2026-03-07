<script lang="ts">
import {Portal, Tooltip} from 'ui-ingredients';
import Button from '$components/ui/Button.svelte';
</script>

<Tooltip.Root lazyMount>
	<Tooltip.Trigger class="mx-auto w-auto">
		{#snippet asChild(props)}
			<Button variant="outline" {...props()}>Hover me</Button>
		{/snippet}
	</Tooltip.Trigger>

	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content
				class={[
					'rounded',
					'border',
					'border-neutral-200',
					'bg-white',
					'px-3.5',
					'py-2.5',
					'dark:border-neutral-800',
					'dark:bg-neutral-900',

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
				<Tooltip.Arrow
					class="[--arrow-background:var(--color-white)] [--arrow-size:--spacing(4)] dark:[--arrow-background:var(--color-neutral-900)]"
				>
					<Tooltip.ArrowTip />
				</Tooltip.Arrow>

				<span>I am a tooltip</span>
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip.Root>
