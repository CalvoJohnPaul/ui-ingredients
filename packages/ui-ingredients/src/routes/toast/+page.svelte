<script lang="ts">
import {toaster} from '../toaster.svelte.js';
</script>

<button
	type="button"
	onclick={() => {
    toaster.create({
      title: 'Yesss!',
      description: 'This is a toast message',
    });
  }}
	style="padding:0px 14px;height:40px;border:1px solid var(--border-default);"
>
	Click me
</button>
