---
id: marquee
title: Marquee
description: A component for continuously scrolling and looping inline content.
---

<demo>

## Usage

```svelte
<script>
  import {Marquee} from 'ui-ingredients';

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
</script>

<Marquee.Root>
  <Marquee.Edge side="start" />
  <Marquee.Viewport>
    <Marquee.Content>
      {#each items as item}
        <Marquee.Item>{item}</Marquee.Item>
      {/each}
    </Marquee.Content>
  </Marquee.Viewport>
  <Marquee.Edge side="end" />
</Marquee.Root>
```

## API Reference

<api>
