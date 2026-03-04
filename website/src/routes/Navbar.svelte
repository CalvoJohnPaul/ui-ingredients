<script lang="ts">
import {page} from '$app/state';
import Badge from '$components/ui/Badge.svelte';
import {navbarStore} from '$stores/navbar.svelte';
import {Menu05Icon} from '@untitled-theme/icons-svelte';
import {useTheme} from 'svelte-os-themes';
import packageJson from 'ui-ingredients/package.json';

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
			<Badge>v{packageJson.version}</Badge>
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
				{...theme.getTriggerProps({
          value: 'auto',
          sequence: ['dark', 'light'],
        })}
			>
				{#if theme.current === 'dark'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						viewBox="0 0 256 256"
						class="size-5"
					>
						<rect width="256" height="256" fill="none"></rect>
						<path
							d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"
						></path>
					</svg>
					<span class="sr-only">Light mode</span>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						viewBox="0 0 256 256"
						class="size-5"
					>
						<rect width="256" height="256" fill="none"></rect>
						<path
							d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
						></path>
					</svg>

					<span class="sr-only">Dark mode</span>
				{/if}
			</button>
		</div>
	</div>
</header>

<div class="h-16"></div>
