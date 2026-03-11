<script lang="ts">
import type {SVGAttributes} from 'svelte/elements';

let {...props}: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	{...props}
>
	<path d="M17 7 7 17m0 0h10M7 17V7"></path>
</svg>
