<script>
import '@fontsource/fira-code/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/lexend/400.css';
import '@fontsource/lexend/500.css';
import '@fontsource/lexend/600.css';
import '@fontsource/lexend/700.css';
import '../app.css';

import {page} from '$app/state';
import {ThemeProvider} from 'svelte-os-themes';
import {LocaleProvider} from 'ui-ingredients';
import Navbar from './Navbar.svelte';
import Pagination from './Pagination.svelte';
import Sidebar from './Sidebar.svelte';
import TableOfContents from './TableOfContents.svelte';

let {children} = $props();
let isHomePage = $derived(page.url.pathname === '/');
</script>

<LocaleProvider locale="en-US">
	<ThemeProvider fallback="dark">
		<Navbar />

		{#if isHomePage}
			<div
				class="relative isolate min-h-[calc(100dvh---spacing(16))] overflow-hidden"
			>
				<div
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 -z-10"
				>
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
					{@render children()}
				</main>
			</div>
		{:else}
			<div
				class="h-[calc(100dvh---spacing(16))] lg:flex lg:items-start lg:justify-center"
			>
				<Sidebar />

				<main
					class="flex min-h-full flex-col p-5 md:p-8 lg:grow lg:p-16 xl:p-20"
				>
					<section class="grow lg:mx-auto lg:w-full lg:max-w-3xl">
						<div
							class="prose prose-neutral dark:prose-invert prose-headings:font-lexend prose-h1:mb-3 prose-h1:font-lexend prose-h1:text-4xl before:prose-p:content-none after:prose-p:content-none prose-p:first:mb-8 prose-p:first:mt-0 prose-p:first:text-lg prose-a:underline-offset-2 prose-strong:font-medium before:prose-code:content-none after:prose-code:content-none lg:prose-code:text-sm min-w-full"
						>
							{@render children()}
						</div>
					</section>
					<section class="mt-8"><Pagination /></section>
				</main>

				<TableOfContents />
			</div>
		{/if}
	</ThemeProvider>
</LocaleProvider>

<style lang="postcss">
/* Shiki */

:global(.shiki),
:global(.shiki span) {
	color: var(--shiki-light);
	background: var(--color-neutral-50);
}

:global(.dark .shiki),
:global(.dark .shiki span) {
	color: var(--shiki-dark);
	background: var(--color-neutral-900);
}

:global(.dark .shiki) {
	border: 1px solid var(--color-neutral-800);
}

/* Shiki line numbers */

:global(.shiki code) {
	counter-reset: step;
	counter-increment: step 0;
}

:global(.shiki code .line::before) {
	content: counter(step);
	counter-increment: step;
	display: inline-block;
	width: 3ch;
	text-align: right;
	margin-right: 1rem;
	color: var(--color-neutral-400);
}

:global(.dark .shiki code .line::before) {
	color: var(--color-neutral-500);
}
</style>
