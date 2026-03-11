<script lang="ts">
import {
	ArrowDownLeftIcon,
	DotsGridIcon,
	Maximize01Icon,
	MinusIcon,
	XCloseIcon,
} from '@untitled-theme/icons-svelte';
import {FloatingPanel, Portal} from 'ui-ingredients';
import Button from '$components/ui/Button.svelte';
</script>

<FloatingPanel.Root lazyMount>
	<FloatingPanel.Trigger class="mx-auto w-auto">
		{#snippet asChild(props)}
			<Button variant="outline" {...props()}>Toggle panel</Button>
		{/snippet}
	</FloatingPanel.Trigger>

	<Portal>
		<FloatingPanel.Positioner>
			<FloatingPanel.Content
				class="rounded-lg border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
			>
				<FloatingPanel.Header
					class="flex items-center gap-2 border-b border-neutral-200 px-3 py-2 dark:border-neutral-800"
				>
					<FloatingPanel.DragTrigger
						class="rounded px-2 py-1 text-xs font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
					>
						<DotsGridIcon class="size-4" />
					</FloatingPanel.DragTrigger>
					<FloatingPanel.Title class="grow text-sm font-semibold">
						Floating Panel
					</FloatingPanel.Title>
					<FloatingPanel.Control class="flex items-center gap-1">
						<FloatingPanel.StageTrigger
							stage="minimized"
							class="rounded px-2 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
							aria-label="Minimize panel"
						>
							<MinusIcon class="size-4" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.StageTrigger
							stage="maximized"
							class="rounded px-2 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
							aria-label="Maximize panel"
						>
							<Maximize01Icon class="size-4" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.StageTrigger
							stage="default"
							class="rounded px-2 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
							aria-label="Reset panel size"
						>
							<ArrowDownLeftIcon class="size-4" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.CloseTrigger
							class="rounded px-2 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
							aria-label="Close panel"
						>
							<XCloseIcon class="size-4" />
						</FloatingPanel.CloseTrigger>
					</FloatingPanel.Control>
				</FloatingPanel.Header>
				<FloatingPanel.Body
					class="space-y-2 px-3 py-3 text-sm text-neutral-600 dark:text-neutral-300"
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
					hic.
				</FloatingPanel.Body>

				<FloatingPanel.ResizeTrigger axis="n" class="size-1" />
				<FloatingPanel.ResizeTrigger axis="e" class="size-1" />
				<FloatingPanel.ResizeTrigger axis="s" class="size-1" />
				<FloatingPanel.ResizeTrigger axis="w" class="size-1" />
				<FloatingPanel.ResizeTrigger axis="ne" class="size-1" />
				<FloatingPanel.ResizeTrigger axis="se" class="size-1" />
				<FloatingPanel.ResizeTrigger axis="sw" class="size-1" />
				<FloatingPanel.ResizeTrigger axis="nw" class="size-1" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel.Root>
