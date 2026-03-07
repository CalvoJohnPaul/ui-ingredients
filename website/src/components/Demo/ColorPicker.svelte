<script lang="ts">
import {DropperIcon} from '@untitled-theme/icons-svelte';
import {ColorPicker} from 'ui-ingredients';
import IconButton from '$components/ui/IconButton.svelte';
import Input from '$components/ui/Input.svelte';
import Label from '$components/ui/Label.svelte';

let presets = [
	'hsl(10, 81%, 59%)',
	'hsl(60, 81%, 59%)',
	'hsl(100, 81%, 59%)',
	'hsl(175, 81%, 59%)',
	'hsl(190, 81%, 59%)',
	'hsl(205, 81%, 59%)',
	'hsl(220, 81%, 59%)',
	'hsl(250, 81%, 59%)',
	'hsl(280, 81%, 59%)',
	'hsl(350, 81%, 59%)',
];
</script>

<ColorPicker.Root lazyMount class="mx-auto max-w-[20rem]">
	{#snippet children(api)}
		<ColorPicker.Label>
			{#snippet asChild(props)}
				<Label {...props()}>Label</Label>
			{/snippet}
		</ColorPicker.Label>
		<ColorPicker.Control class="flex gap-2">
			<ColorPicker.ChannelInput channel="hex" class="grow">
				{#snippet asChild(props)}
					<Input {...props()} />
				{/snippet}
			</ColorPicker.ChannelInput>
			<ColorPicker.Trigger>
				{#snippet asChild(props)}
					<IconButton {...props()}>
						<ColorPicker.Swatch value={api().value} class="size-7 rounded-sm" />
					</IconButton>
				{/snippet}
			</ColorPicker.Trigger>
		</ColorPicker.Control>

		<ColorPicker.Positioner>
			<ColorPicker.Content
				class={[
					'max-w-[20rem]',
					'rounded',
					'border',
					'border-neutral-200',
					'bg-white',
					'p-4',
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
				<ColorPicker.Area class="aspect-video w-full">
					<ColorPicker.AreaBackground class="size-full rounded" />
					<ColorPicker.AreaThumb
						class="size-4 rounded-full border-2 border-white"
					/>
				</ColorPicker.Area>

				<div class="mt-4 flex items-center gap-4">
					<ColorPicker.EyeDropperTrigger>
						{#snippet asChild(props)}
							<IconButton {...props()}> <DropperIcon /> </IconButton>
						{/snippet}
					</ColorPicker.EyeDropperTrigger>

					<div class="grow space-y-2">
						<ColorPicker.ChannelSlider channel="hue" class="rounded">
							<ColorPicker.ChannelSliderTrack class="h-4 rounded" />
							<ColorPicker.ChannelSliderThumb
								class="size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white outline-2 outline-white"
							/>
						</ColorPicker.ChannelSlider>

						<ColorPicker.ChannelSlider channel="alpha" class="rounded">
							<ColorPicker.TransparencyGrid size="8px" class="h-4 rounded" />
							<ColorPicker.ChannelSliderTrack class="h-4 rounded" />
							<ColorPicker.ChannelSliderThumb
								class="size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white outline-2 outline-white"
							/>
						</ColorPicker.ChannelSlider>
					</div>
				</div>

				<div class="mt-4 flex gap-3">
					<ColorPicker.ChannelInput channel="hex">
						{#snippet asChild(props)}
							<Input {...props()} size="xs" />
						{/snippet}
					</ColorPicker.ChannelInput>
					<ColorPicker.ChannelInput channel="alpha">
						{#snippet asChild(props)}
							<Input {...props()} size="xs" />
						{/snippet}
					</ColorPicker.ChannelInput>
				</div>

				<ColorPicker.SwatchGroup class="mt-4 grid grid-cols-6 gap-3">
					{#each presets as color}
						<ColorPicker.SwatchTrigger value={color}>
							<ColorPicker.Swatch
								value={color}
								class="aspect-square w-full rounded-sm"
							/>
						</ColorPicker.SwatchTrigger>
					{/each}
				</ColorPicker.SwatchGroup>
			</ColorPicker.Content>
		</ColorPicker.Positioner>
	{/snippet}
</ColorPicker.Root>
