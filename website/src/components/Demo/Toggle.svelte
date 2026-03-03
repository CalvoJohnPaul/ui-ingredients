<script lang="ts">
import IconButton from '$components/ui/IconButton.svelte';
import {Bell02Icon, BellOff02Icon} from '@untitled-theme/icons-svelte';
import {Toggle} from 'ui-ingredients';
</script>

<Toggle.Root>
	{#snippet asChild(props, api)}
		<IconButton class="mx-auto" {...props()}>
			{#if api().pressed}
				<BellOff02Icon />
			{:else}
				<Bell02Icon />
			{/if}
		</IconButton>
	{/snippet}
</Toggle.Root>
