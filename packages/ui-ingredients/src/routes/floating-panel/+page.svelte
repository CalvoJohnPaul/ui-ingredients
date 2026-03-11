<script lang="ts">
import {FloatingPanel, Portal} from '$lib/index.js';
import ArrowDownLeftIcon from '../@icons/ArrowDownLeftIcon.svelte';
import DotsGridIcon from '../@icons/DotsGridIcon.svelte';
import MaximizeIcon from '../@icons/MaximizeIcon.svelte';
import MinusIcon from '../@icons/MinusIcon.svelte';
import XIcon from '../@icons/XIcon.svelte';
</script>

<FloatingPanel.Root lazyMount>
	<FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner>
			<FloatingPanel.Content>
				<FloatingPanel.Header>
					<FloatingPanel.DragTrigger>
						<DotsGridIcon style="width:20px;height:20px;" />
					</FloatingPanel.DragTrigger>
					<FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
					<FloatingPanel.Control>
						<FloatingPanel.StageTrigger stage="minimized">
							<MinusIcon style="width:16px;height:16px;" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.StageTrigger stage="maximized">
							<MaximizeIcon style="width:16px;height:16px;" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.StageTrigger stage="default">
							<ArrowDownLeftIcon style="width:16px;height:16px;" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.CloseTrigger>
							<XIcon style="width:16px;height:16px;" />
						</FloatingPanel.CloseTrigger>
					</FloatingPanel.Control>
				</FloatingPanel.Header>
				<FloatingPanel.Body>Content</FloatingPanel.Body>

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
