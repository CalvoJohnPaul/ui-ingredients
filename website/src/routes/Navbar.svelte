<script lang="ts">
import {
	CloudMoonIcon,
	CloudSun02Icon,
	Menu05Icon,
} from '@untitled-theme/icons-svelte';
import {useTheme} from 'svelte-os-themes';
import packageJson from 'ui-ingredients/package.json';
import {page} from '$app/state';
import Badge from '$components/ui/Badge.svelte';
import {navbarStore} from '$stores/navbar.svelte';

let theme = useTheme();

let links: {
	label: string;
	href: string;
	active?: boolean;
	external?: boolean;
}[] = $derived([
	{
		label: 'Home',
		href: '/',
		active: page.url.pathname === '/',
	},
	{
		label: 'Docs',
		href: '/overview/getting-started',
		active:
			page.url.pathname.startsWith('/overview') ||
			page.url.pathname.startsWith('/components') ||
			page.url.pathname.startsWith('/utilities'),
	},
	{
		label: 'GitHub',
		href: 'https://github.com/CalvoJohnPaul/ui-ingredients',
		external: true,
	},
]);
</script>

<header
	class="fixed left-0 right-(--scrollbar-width,0) top-0 h-16 border-b border-neutral-200 bg-white px-5 md:px-8 lg:px-12 dark:border-neutral-800 dark:bg-neutral-950"
>
	<div class="flex h-full items-center justify-center">
		<div class="flex items-center gap-2">
			<button
				type="button"
				onclick={navbarStore.drawer.toggle}
				class="lg:hidden"
			>
				<Menu05Icon class="size-6" />
				<span class="sr-only">Open drawer</span>
			</button>
			<a href="/" class="font-lexend font-semibold tracking-tight lg:text-xl">
				UI Ingredients
			</a>
			<Badge class="font-mono">v{packageJson.version}</Badge>
		</div>

		<div class="grow"></div>
		<div class="flex items-center gap-3 lg:gap-5">
			<nav class="hidden items-center gap-1 text-sm font-medium lg:flex">
				{#each links as link}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						class={[
							'block px-2.5 py-0.5 text-neutral-600 dark:text-neutral-300 rounded-full',
							link.active && 'bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-white'
						]}
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<button
				type="button"
				onclick={() => {
					if (theme.current === 'dark') {
						theme.current = 'light';
					} else {
						theme.current = 'dark';
					}
				}}
			>
				{#if theme.current === 'dark'}
					<CloudMoonIcon class="size-5" />
					<span class="sr-only">Light mode</span>
				{:else}
					<CloudSun02Icon class="size-5" />
					<span class="sr-only">Dark mode</span>
				{/if}
			</button>
		</div>
	</div>
</header>

<div class="h-16"></div>
