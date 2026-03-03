<script lang="ts">
import {createToaster, Toast, Toaster} from '$lib/index.js';

const toaster = createToaster({
	placement: 'bottom-end',
	overlap: true,
	duration: 1000 * 5,
});
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

<Toaster {toaster}>
	<Toast.Root>
		<Toast.Title />
		<Toast.Description />
		<Toast.CloseTrigger>Close</Toast.CloseTrigger>
	</Toast.Root>
</Toaster>
