<script lang="ts">
import {ColorPicker} from '$lib/index.js';
import DropperIcon from '../DropperIcon.svelte';

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

let value = $state(ColorPicker.parse('#9863BF'));

$inspect({value});
</script>

<ColorPicker.Root
	{value}
	onValueChange={(detail) => {
    value = detail.value;
  }}
>
	{#snippet children(api)}
		<ColorPicker.Label>Label</ColorPicker.Label>
		<ColorPicker.Control>
			<ColorPicker.ChannelInput channel="hex" />
			<ColorPicker.Trigger>
				<ColorPicker.Swatch value={api().value} />
			</ColorPicker.Trigger>
		</ColorPicker.Control>
		<ColorPicker.Positioner>
			<ColorPicker.Content>
				<ColorPicker.Area>
					<ColorPicker.AreaBackground />
					<ColorPicker.AreaThumb />
				</ColorPicker.Area>

				<div style="margin-top:12px;display:flex;gap:12px;">
					<ColorPicker.EyeDropperTrigger>
						<DropperIcon style="width:20px;height:20px;" />
					</ColorPicker.EyeDropperTrigger>

					<div
						style="height:40px;flex-grow:1;display:grid;grid-rows:repeat(2, 1fr);gap:5px;"
					>
						<ColorPicker.ChannelSlider channel="hue">
							<ColorPicker.ChannelSliderTrack />
							<ColorPicker.ChannelSliderThumb />
						</ColorPicker.ChannelSlider>
						<ColorPicker.ChannelSlider channel="alpha">
							<ColorPicker.TransparencyGrid size="8px" />
							<ColorPicker.ChannelSliderTrack />
							<ColorPicker.ChannelSliderThumb />
						</ColorPicker.ChannelSlider>
					</div>
				</div>

				<div style="width:100%;margin-top:12px;display:flex;gap:8px;">
					<ColorPicker.ChannelInput channel="hex" style="width:100%;" />
					<ColorPicker.ChannelInput channel="alpha" style="width:100%;" />
				</div>

				<ColorPicker.SwatchGroup>
					{#each presets as color}
						<ColorPicker.SwatchTrigger value={color}>
							<ColorPicker.Swatch value={color} />
						</ColorPicker.SwatchTrigger>
					{/each}
				</ColorPicker.SwatchGroup>
			</ColorPicker.Content>
		</ColorPicker.Positioner>
	{/snippet}
</ColorPicker.Root>
