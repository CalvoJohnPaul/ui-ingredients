<script>
import {page} from '$app/state';
import {navbarStore} from '$stores/navbar.svelte';
import {components, overview, utilities} from '$velite';
import {Drawer, Portal} from 'ui-ingredients';
import Search from './Search.svelte';

const links = [
	{
		label: 'Overview',
		links: overview.map((item) => ({
			path: item.permalink,
			label: item.title,
			beta: false,
			deprecated: false,
		})),
	},
	{
		label: 'Components',
		links: components.map((item) => ({
			path: item.permalink,
			label: item.title,
			beta: item.beta,
			deprecated: item.deprecated,
		})),
	},
	{
		label: 'Utilities',
		links: utilities.map((item) => ({
			path: item.permalink,
			label: item.title,
			beta: item.beta,
			deprecated: item.deprecated,
		})),
	},
];
</script>

<div
	class="hidden w-[20rem] shrink-0 lg:block"
	aria-hidden="true"
	data-placeholder
></div>

<nav
	class="fixed left-0 top-16 hidden h-[calc(100dvh---spacing(16))] w-[20rem] shrink-0 space-y-4 overflow-y-auto scroll-smooth border-r border-neutral-200/80 bg-white/80 px-8 py-8 backdrop-blur-sm lg:block dark:border-neutral-800 dark:bg-neutral-950/75"
>
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -left-12 top-10 h-56 w-56 rounded-full bg-linear-to-br from-indigo-500/10 via-fuchsia-500/6 to-transparent blur-3xl dark:from-indigo-500/16 dark:via-fuchsia-500/10"
		></div>
		<div
			class="absolute right-0 top-1/2 h-52 w-52 rounded-full bg-linear-to-br from-cyan-500/7 via-indigo-500/6 to-transparent blur-3xl dark:from-cyan-500/12 dark:via-indigo-500/9"
		></div>
	</div>

	<Search />

	{@render items()}
</nav>

<Drawer.Root
	open={navbarStore.drawer.isOpen}
	onOpenChange={(detail) => {
    if (detail.open) {
      navbarStore.drawer.open();
    } else {
      navbarStore.drawer.close();
    }
  }}
>
	<Portal>
		<Drawer.Backdrop
			class="ui-open:animate-fade-in ui-closed:animate-fade-out fixed left-0 top-0 size-full bg-white/95 dark:bg-black/95"
		/>

		<Drawer.Positioner>
			<Drawer.Content
				class="ui-open:animate-slide-in-left ui-closed:animate-slide-out-left fixed left-0 top-0 flex h-dvh w-[18rem] flex-col overflow-y-auto border-r border-neutral-200/80 bg-white/95 px-5 py-6 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/90"
			>
				<Drawer.Body> <nav>{@render items()}</nav> </Drawer.Body>
			</Drawer.Content>
		</Drawer.Positioner>
	</Portal>
</Drawer.Root>

{#snippet items()}
	<ul>
		{#each links as parent}
			<li
				class="border-t border-neutral-200/80 py-4 first:border-0 first:pt-0 dark:border-neutral-800"
			>
				<span
					class="font-lexend block grow py-1 text-left text-xs font-semibold tracking-wide text-neutral-500 uppercase lg:text-[0.7rem] dark:text-neutral-400"
				>
					{parent.label}
				</span>

				<ul class="space-y-1 overflow-hidden">
					{#each parent.links as child}
						<li>
							<a
								href={child.path}
								class={[
									'relative flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors duration-150',
									page.url.pathname === child.path
										? 'bg-indigo-500/10 dark:bg-indigo-500/15'
										: 'hover:bg-neutral-100/90 dark:hover:bg-neutral-800/45',
								]}
								onclick={() => {
                  navbarStore.drawer.close();
                }}
							>
								<span
									aria-hidden="true"
									class={[
										'h-1.5 w-1.5 rounded-full transition-colors duration-150',
										page.url.pathname === child.path
											? 'bg-indigo-500 dark:bg-indigo-400'
											: 'bg-neutral-300 dark:bg-neutral-700',
									]}
								></span>

								<span
									class={[
										'grow font-medium transition-colors duration-150 lg:text-sm',
                    page.url.pathname === child.path
                      ? 'text-indigo-500 dark:text-indigo-400'
                      : 'text-neutral-500 hover:text-inherit dark:text-neutral-400',
                  ]}
								>
									{child.label}
								</span>

								{#if child.beta}
									<p
										class="text-xs text-amber-600 dark:text-amber-400 font-medium font-mono uppercase"
									>
										Preview
									</p>
								{/if}

								{#if child.deprecated}
									<p
										class="text-xs text-rose-600 dark:text-rose-400 font-medium font-mono uppercase"
									>
										Deprecated
									</p>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
{/snippet}
