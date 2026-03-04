---
id: scroll-area
title: Scroll Area
description: A component for custom scrollable regions with styled scrollbars and viewport controls.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {ScrollArea} from 'ui-ingredients';
</script>

<ScrollArea.Root>
  <ScrollArea.Viewport>
    <ScrollArea.Content>
      <p>Scrollable content...</p>
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>
```

## API Reference

<api>

