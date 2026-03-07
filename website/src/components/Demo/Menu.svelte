<script lang="ts">
import {ChevronDownIcon} from '@untitled-theme/icons-svelte';
import {Menu, Portal} from 'ui-ingredients';
import Button from '$components/ui/Button.svelte';

let items = [
	{value: 'Item 1'},
	{value: 'Item 2'},
	{value: 'Item 3'},
	{value: 'Item 4'},
	{value: 'Item 5', disabled: true},
];
</script>

<Menu.Root
	lazyMount
	positioning={{
    placement: 'bottom',
  }}
>
	<Menu.Trigger>
		{#snippet asChild(props)}
			<Button class="mx-auto w-auto" variant="outline" size="sm" {...props()}>
				<span>Toggle menu</span>
				<Menu.Indicator
					class="transition-transform duration-150 ui-open:rotate-180"
				>
					<ChevronDownIcon class="size-5" />
				</Menu.Indicator>
			</Button>
		{/snippet}
	</Menu.Trigger>

	<Portal>
		<Menu.Positioner>
			<Menu.Content
				class={[
					'rounded',
					'border',
					'border-neutral-200',
					'bg-white',
					'p-2',
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
				{#each items as item (item.value)}
					<Menu.Item
						class="flex w-32 cursor-default items-center rounded px-2.5 py-1 ui-disabled:cursor-not-allowed ui-disabled:text-neutral-400 ui-highlighted:bg-neutral-50 dark:ui-disabled:text-neutral-500 dark:ui-highlighted:bg-neutral-800/50"
						value={item.value}
						disabled={item.disabled}
					>
						{item.value}
					</Menu.Item>
				{/each}
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu.Root>
