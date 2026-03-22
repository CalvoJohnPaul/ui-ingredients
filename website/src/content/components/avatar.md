---
id: avatar
title: Avatar
description: A visual component for displaying a user’s profile image or initials.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {Avatar} from 'ui-ingredients';
</script>

<Avatar.Root>
  <Avatar.Image src="https://i.pravatar.cc/300" alt="" />
  <Avatar.Fallback>{Avatar.initials('John Doe')}</Avatar.Fallback>
</Avatar.Root>
```

## API Reference

<api>
