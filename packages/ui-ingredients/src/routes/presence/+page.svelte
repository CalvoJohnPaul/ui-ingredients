<script lang="ts">
import {Presence} from '$lib/index.js';

let present = $state(false);

$inspect({present});
</script>

<button
	type="button"
	onclick={() => {
    present = !present;
  }}
	style="padding: 0px 14px; border: 1px solid var(--border-default); height: 40px;"
>
	Click me
</button>

<Presence {present} lazyMount keepMounted={false} class="presence">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eligendi
	corrupti veniam maxime rem eaque praesentium dignissimos asperiores. Beatae
	modi nihil delectus eaque! Ipsam.
</Presence>

<style>
:global(.presence) {
	margin-top: 12px;
	max-width: 400px;
}

:global(.presence[data-state="open"]) {
	animation: fade-in 250ms;
}

:global(.presence[data-state="closed"]) {
	animation: fade-out 150ms;
}
</style>
