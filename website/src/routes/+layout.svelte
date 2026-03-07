<script>
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/fira-code/600.css';
import '@fontsource/fira-code/700.css';
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
import {injectAnalytics} from '@vercel/analytics/sveltekit';
import {onMount} from 'svelte';
import {ThemeProvider} from 'svelte-os-themes';
import {LocaleProvider} from 'ui-ingredients';
import Navbar from './Navbar.svelte';
import Pagination from './Pagination.svelte';
import Sidebar from './Sidebar.svelte';
import TableOfContents from './TableOfContents.svelte';

let {children} = $props();
let home = $derived(page.url.pathname === '/');

onMount(() => {
	injectAnalytics();
});
</script>

<LocaleProvider locale="en-US">
	<ThemeProvider fallback="dark">
		{#if home}
			{@render children()}
		{:else}
			<Navbar />
			<div
				class="h-[calc(100dvh---spacing(16))] lg:flex lg:items-start lg:justify-center"
			>
				<Sidebar />

				<main
					class="flex min-h-full flex-col p-5 md:p-8 lg:grow lg:p-16 xl:p-20"
				>
					<section class="grow lg:mx-auto lg:w-full lg:max-w-3xl">
						<div
							class={[
								"prose",
								"prose-neutral",
								"dark:prose-invert",
								"prose-headings:font-lexend",
								"prose-h1:mb-3",
								"prose-h1:text-4xl",
								"prose-p:first:mb-8",
								"prose-p:first:mt-0",
								"prose-p:first:text-lg",
								"prose-a:underline-offset-2",
								"prose-strong:font-medium",
								"lg:prose-code:text-sm",
								"min-w-full",
								"max-w-none",
								"prose-code:font-medium",
								"prose-code:before:hidden",
								"prose-code:after:hidden",
								"prose-code:text-orange-500",
								"prose-code:dark:text-orange-400",
							]}
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
