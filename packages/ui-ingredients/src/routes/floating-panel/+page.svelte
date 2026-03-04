<script lang="ts">
import {FloatingPanel, Portal} from '$lib/index.js';
import XIcon from '../@icons/XIcon.svelte';
</script>

<FloatingPanel.Root>
	<FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner>
			<FloatingPanel.Content>
				<FloatingPanel.DragTrigger>
					<FloatingPanel.Header>
						<FloatingPanel.Title>
							<!-- <GripVertical /> -->
							Floating Panel
						</FloatingPanel.Title>
						<FloatingPanel.Control>
							<FloatingPanel.StageTrigger stage="minimized">
								<!-- <Minus /> -->
								Minus
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="maximized">
								<!-- <Maximize2 /> -->
								Maximize
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="default">
								<!-- <ArrowDownLeft /> -->
								Default
							</FloatingPanel.StageTrigger>
							<FloatingPanel.CloseTrigger>
								<XIcon />
							</FloatingPanel.CloseTrigger>
						</FloatingPanel.Control>
					</FloatingPanel.Header>
				</FloatingPanel.DragTrigger>
				<FloatingPanel.Body>Hello World</FloatingPanel.Body>

				<FloatingPanel.ResizeTrigger axis="n" />
				<FloatingPanel.ResizeTrigger axis="e" />
				<FloatingPanel.ResizeTrigger axis="w" />
				<FloatingPanel.ResizeTrigger axis="s" />
				<FloatingPanel.ResizeTrigger axis="ne" />
				<FloatingPanel.ResizeTrigger axis="se" />
				<FloatingPanel.ResizeTrigger axis="sw" />
				<FloatingPanel.ResizeTrigger axis="nw" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel.Root>
