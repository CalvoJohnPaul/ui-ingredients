<script lang="ts">
import {page} from '$app/state';
import Metadata from '$components/Metadata.svelte';
import Badge from '$components/ui/Badge.svelte';
import Button from '$components/ui/Button.svelte';
import Link from '$components/ui/Link.svelte';
import {CloudMoonIcon, CloudSun02Icon} from '@untitled-theme/icons-svelte';
import {useTheme} from 'svelte-os-themes';
import packageJson from 'ui-ingredients/package.json';

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

const highlights = [
	{
		title: 'Headless & composable',
		description:
			'Build your own UI layer using flexible parts, snippets, and composition patterns.',
	},
	{
		title: 'Accessibility-first',
		description:
			'Components are powered by robust interaction logic with keyboard and screen reader support.',
	},
	{
		title: 'Styling freedom',
		description:
			'Use utility classes, CSS modules, or vanilla CSS with data attributes and state selectors.',
	},
];

let theme = useTheme();
</script>

<title>UI Ingredients - Headless component library for Svelte</title>

<Metadata
	title="Headless component library for Svelte"
	description="Start building accessible Svelte UIs without fighting design constraints. UI Ingredients gives you unstyled, behavior-rich components so you can create a design system that matches your product."
/>

<div class="h-16"></div>
<header
	class="fixed left-0 right-(--scrollbar-width,0) top-0 z-50 h-16 border-b border-neutral-200 bg-white px-5 md:px-8 lg:px-12 dark:border-neutral-800 dark:bg-neutral-950"
>
	<div class="flex h-full items-center justify-center">
		<div class="flex items-center gap-2">
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
				{...theme.getTriggerProps({
          value: 'auto',
          sequence: ['dark', 'light'],
        })}
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

<div
	class="relative isolate min-h-[calc(100dvh---spacing(16))] overflow-hidden"
>
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -left-28 top-0 h-80 w-80 rounded-full bg-linear-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-3xl dark:from-indigo-500/30 dark:via-fuchsia-500/20"
		></div>
		<div
			class="absolute right-0 top-40 h-96 w-96 rounded-full bg-linear-to-br from-cyan-400/20 via-indigo-500/10 to-transparent blur-3xl dark:from-cyan-500/25 dark:via-indigo-500/20"
		></div>
		<div
			class="absolute -right-24 bottom-0 h-112 w-md rounded-full bg-linear-to-br from-fuchsia-500/16 via-indigo-500/10 to-transparent blur-3xl dark:from-fuchsia-500/24 dark:via-indigo-500/16"
		></div>
		<div
			class="absolute inset-y-0 right-0 w-[44%] bg-linear-to-l from-cyan-500/8 via-indigo-500/6 to-transparent dark:from-cyan-400/10 dark:via-indigo-400/8"
		></div>
		<div
			class="absolute inset-0 bg-linear-to-b from-white via-white/95 to-white dark:from-neutral-950 dark:via-neutral-950/95 dark:to-neutral-950"
		></div>
		<div
			class="absolute inset-0 opacity-40 dark:opacity-30"
			style="background-image: linear-gradient(to right, rgb(148 163 184 / 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.14) 1px, transparent 1px); background-size: 36px 36px;"
		></div>
		<div
			class="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
			style="background-image: radial-gradient(rgb(100 116 139 / 0.3) 0.6px, transparent 0.6px); background-size: 7px 7px;"
		></div>
	</div>

	<main class="relative px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
		<div class="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:gap-20">
			<section
				class="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 p-6 backdrop-blur-sm md:p-8 lg:p-10 dark:border-neutral-800 dark:bg-neutral-900/55"
			>
				<div
					aria-hidden="true"
					class="pointer-events-none absolute -right-20 -top-16 h-56 w-56 rounded-full bg-linear-to-br from-indigo-500/20 via-fuchsia-500/15 to-transparent blur-3xl dark:from-indigo-400/25 dark:via-fuchsia-500/20"
				></div>
				<div class="flex flex-col gap-6">
					<div class="flex items-center gap-3">
						<Badge>Headless components for Svelte</Badge>
					</div>

					<div class="max-w-3xl space-y-4">
						<h1
							class="font-lexend text-4xl font-semibold tracking-tight lg:text-5xl"
						>
							Build accessible Svelte UIs without fighting design
							<span
								class="underline decoration-wavy decoration-[1.75px] underline-offset-[0.16em] decoration-indigo-500 dark:decoration-pink-400"
							>
								constraints
							</span>
						</h1>
						<p class="text-lg text-neutral-600 dark:text-neutral-300">
							UI Ingredients gives you unstyled, behavior-rich components so you
							can create a design system that matches your product.
						</p>
						<div class="flex flex-wrap gap-2 pt-1">
							<span
								class="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200"
							>
								Accessible by default
							</span>
							<span
								class="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200"
							>
								40+ components
							</span>
							<span
								class="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200"
							>
								Svelte-first primitives
							</span>
						</div>
					</div>

					<div class="flex flex-col gap-3 sm:flex-row sm:items-center">
						<Link href="/overview/getting-started">Get Started</Link>
						<Link href="/components/accordion" variant="outline">
							Browse Components
						</Link>
						<Link
							href="https://github.com/CalvoJohnPaul/ui-ingredients"
							target="_blank"
							rel="noopener noreferrer"
							variant="outline"
						>
							GitHub
						</Link>
					</div>
				</div>
			</section>

			<section class="grid gap-4 lg:grid-cols-3">
				{#each highlights as item (item.title)}
					<article
						class="rounded-xl border border-neutral-200/80 bg-white/85 p-5 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/45"
					>
						<h2 class="font-lexend text-lg font-semibold">{item.title}</h2>
						<p
							class="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-300"
						>
							{item.description}
						</p>
					</article>
				{/each}
			</section>

			<section
				class="rounded-2xl border border-neutral-200/80 bg-white/80 p-6 backdrop-blur-sm md:p-8 dark:border-neutral-800 dark:bg-neutral-900/55"
			>
				<div class="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
					<div>
						<h2
							class="font-lexend text-2xl font-semibold tracking-tight lg:text-3xl"
						>
							Start with a few lines
						</h2>
						<p class="mt-3 text-neutral-600 dark:text-neutral-300">
							Install the package, compose primitives, and style your own way
							using Tailwind, CSS, or any design token system.
						</p>
						<div class="mt-5">
							<a href="/overview/styling">
								<Button variant="outline">See Styling Guide</Button>
							</a>
						</div>
					</div>

					<div
						class="rounded-xl border border-neutral-200 bg-neutral-50/90 p-4 font-mono text-sm dark:border-neutral-800 dark:bg-neutral-900/80"
					>
						<p class="text-neutral-600 dark:text-neutral-300">
							npm install ui-ingredients
						</p>
						<p class="mt-3 text-neutral-700 dark:text-neutral-200">
							import &#123;Dialog, Portal&#125; from 'ui-ingredients';
						</p>
						<p class="mt-3 text-neutral-700 dark:text-neutral-200">
							&lt;Dialog.Root&gt;...&lt;/Dialog.Root&gt;
						</p>
					</div>
				</div>
			</section>
		</div>
	</main>
</div>
