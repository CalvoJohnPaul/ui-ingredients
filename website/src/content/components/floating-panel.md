---
id: floating-panel
title: Floating Panel
description: A movable and resizable panel component with controls for minimizing, maximizing, and restoring size.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {
    ArrowDownLeftIcon,
    DotsGridIcon,
    MaximizeIcon,
    MinusIcon,
    XIcon,
  } from '$lib/icons';
  import {FloatingPanel, Portal} from 'ui-ingredients';
</script>

<FloatingPanel.Root>
  <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
  <Portal>
    <FloatingPanel.Positioner>
      <FloatingPanel.Content>
        <FloatingPanel.Header>
          <FloatingPanel.DragTrigger>
            <DotsGridIcon />
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
          <FloatingPanel.Control>
            <FloatingPanel.StageTrigger stage="minimized">
              <MinusIcon />
            </FloatingPanel.StageTrigger>
            <FloatingPanel.StageTrigger stage="maximized">
              <MaximizeIcon />
            </FloatingPanel.StageTrigger>
            <FloatingPanel.StageTrigger stage="default">
              <ArrowDownLeftIcon />
            </FloatingPanel.StageTrigger>
            <FloatingPanel.CloseTrigger>
              <XIcon />
            </FloatingPanel.CloseTrigger>
          </FloatingPanel.Control>
        </FloatingPanel.Header>
        <FloatingPanel.Body>Content</FloatingPanel.Body>
        <FloatingPanel.ResizeTrigger axis="n" />
        <FloatingPanel.ResizeTrigger axis="e" />
        <FloatingPanel.ResizeTrigger axis="s" />
        <FloatingPanel.ResizeTrigger axis="w" />
        <FloatingPanel.ResizeTrigger axis="ne" />
        <FloatingPanel.ResizeTrigger axis="se" />
        <FloatingPanel.ResizeTrigger axis="sw" />
        <FloatingPanel.ResizeTrigger axis="nw" />
      </FloatingPanel.Content>
    </FloatingPanel.Positioner>
  </Portal>
</FloatingPanel.Root>
```

## API Reference

<api>
