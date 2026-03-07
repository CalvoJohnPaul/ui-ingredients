<script lang="ts">
import {HoverCard, Portal} from 'ui-ingredients';
</script>

<HoverCard.Root
	lazyMount
	positioning={{
    placement: 'bottom',
  }}
>
	<HoverCard.Trigger
		class="mx-auto block w-fit font-semibold underline-offset-2 hover:underline"
	>
		{#snippet asChild(props)}
			<button type="button" {...props()}>@ui-ingredients</button>
		{/snippet}
	</HoverCard.Trigger>

	<Portal>
		<HoverCard.Positioner>
			<HoverCard.Content
				class={[
					'w-[90vw]',
					'rounded',
					'border',
					'border-neutral-200',
					'bg-white',
					'p-4',
					'dark:border-neutral-800',
					'dark:bg-neutral-900',
					'lg:max-w-[24rem]',
					
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
				<HoverCard.Arrow
					class="[--arrow-background:var(--color-white)] [--arrow-size:--spacing(4)] dark:[--arrow-background:var(--color-neutral-900)]"
				>
					<HoverCard.ArrowTip />
				</HoverCard.Arrow>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
				neque, tenetur praesentium laboriosam esse eius at maxime quam magni
				rerum animi ducimus debitis?
			</HoverCard.Content>
		</HoverCard.Positioner>
	</Portal>
</HoverCard.Root>
