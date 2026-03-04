<script lang="ts">
import {Marquee} from '$lib/index.js';

const items = [
	{name: 'Microsoft', logo: '🏢'},
	{name: 'Apple', logo: '🍎'},
	{name: 'Google', logo: '🔍'},
	{name: 'Amazon', logo: '📦'},
];
</script>

<Marquee.Root autoFill side="start" pauseOnInteraction spacing="8px">
	<Marquee.Viewport>
		<Marquee.Content>
			{#each items as item}
				<Marquee.Item>
					<span>{item.logo}</span>
					<span>{item.name}</span>
				</Marquee.Item>
			{/each}
		</Marquee.Content>
	</Marquee.Viewport>
</Marquee.Root>
