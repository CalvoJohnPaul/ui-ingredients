<script lang="ts">
import Badge from '$components/ui/Badge.svelte';
import Button from '$components/ui/Button.svelte';

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
	{
		title: 'Svelte-native API',
		description:
			'Designed for modern Svelte apps with clean primitives that feel natural to use.',
	},
];
</script>

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
					Build accessible Svelte UIs without fighting design constraints
				</h1>
				<div
					class="hero-accent h-1 w-40 rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-cyan-500"
				></div>
				<p class="text-lg text-neutral-600 dark:text-neutral-300">
					UI Ingredients gives you unstyled, behavior-rich components so you can
					create a design system that matches your product.
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
				<a href="/overview/getting-started">
					<Button class="cta-shimmer-primary">Get Started</Button>
				</a>
				<a href="/components/accordion">
					<Button variant="outline">Browse Components</Button>
				</a>
				<a
					href="https://github.com/CalvoJohnPaul/ui-ingredients"
					data-sveltekit-preload-data="off"
				>
					<Button variant="outline">GitHub</Button>
				</a>
			</div>
		</div>
	</section>

	<section class="grid gap-4 md:grid-cols-2">
		{#each highlights as item}
			<article
				class="rounded-xl border border-neutral-200/80 bg-white/85 p-5 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/45"
			>
				<h2 class="font-lexend text-lg font-semibold">{item.title}</h2>
				<p class="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-300">
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
					Install the package, compose primitives, and style your own way using
					Tailwind, CSS, or any design token system.
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
					import {'{Dialog, Portal}'} from 'ui-ingredients';
				</p>
				<p class="mt-3 text-neutral-700 dark:text-neutral-200">
					{'<Dialog.Root>...</Dialog.Root>'}
				</p>
			</div>
		</div>
	</section>
</div>

<style lang="postcss">
.hero-accent {
	background-size: 200% 100%;
	animation: hero-accent-shimmer 8s linear infinite;
}

:global(.cta-shimmer-primary) {
	box-shadow:
		0 0 0 1px rgb(99 102 241 / 0.55),
		0 0 24px rgb(99 102 241 / 0.22);
	animation: cta-ring-shimmer 6s linear infinite;
}

@keyframes hero-accent-shimmer {
	0% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 200% 50%;
	}
}

@keyframes cta-ring-shimmer {
	0% {
		box-shadow:
			0 0 0 1px rgb(99 102 241 / 0.55),
			0 0 24px rgb(99 102 241 / 0.22);
	}
	33% {
		box-shadow:
			0 0 0 1px rgb(217 70 239 / 0.55),
			0 0 24px rgb(217 70 239 / 0.2);
	}
	66% {
		box-shadow:
			0 0 0 1px rgb(6 182 212 / 0.55),
			0 0 24px rgb(6 182 212 / 0.2);
	}
	100% {
		box-shadow:
			0 0 0 1px rgb(99 102 241 / 0.55),
			0 0 24px rgb(99 102 241 / 0.22);
	}
}

@media (prefers-reduced-motion: reduce) {
	.hero-accent {
		animation: none;
	}

	:global(.cta-shimmer-primary) {
		animation: none;
	}
}
</style>
