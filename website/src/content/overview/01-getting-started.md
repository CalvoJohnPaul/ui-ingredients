---
id: getting-started
title: Getting Started
description: Start incorporating UI Ingredients into your project today!
---

# Getting Started

Get up and running with UI Ingredients in just a few steps.

## Setup Guide

1. **Install UI Ingredients**

```bash
npm install ui-ingredients
```

2. **Import and render a component**

```svelte
<script>
  import {Dialog, Portal} from 'ui-ingredients';
</script>

<Dialog.Root>
  <Dialog.Trigger>Open dialog</Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

3. **Add styles**

```css
[data-scope='dialog'][data-part='backdrop'] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: var(--z-index);
}

[data-scope='dialog'][data-part='content'] {
  padding: 1.25rem;
  border-radius: 0.75rem;
  background: white;
}
```

4. **Done**

Your first component is now installed and styled.
