<script lang="ts">
import {Marquee} from 'ui-ingredients';

const items = [
	{icon: '⚡', label: 'Fast setup'},
	{icon: '🎨', label: 'Composable styles'},
	{icon: '🧩', label: 'Headless primitives'},
	{icon: '🛡️', label: 'Accessible by default'},
	{icon: '🚀', label: 'Production ready'},
	{icon: '🧠', label: 'Type-safe API'},
];
</script>

<Marquee.Root
	autoFill
	pauseOnInteraction
	spacing="0.75rem"
	class="ui-paused:**:[animation-play-state:paused]"
>
	<Marquee.Viewport>
		<Marquee.Content class="animate-marquee">
			{#each items as item (item.label)}
				<Marquee.Item
					class="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium dark:border-neutral-800 dark:bg-neutral-900"
				>
					<span>{item.icon}</span>
					<span>{item.label}</span>
				</Marquee.Item>
			{/each}
		</Marquee.Content>
	</Marquee.Viewport>
</Marquee.Root>
