<script lang="ts">
import {Avatar} from '$lib/index.js';
</script>

<Avatar.Root>
	<Avatar.Image src="https://i.pravatar.cc/300" alt="" />
	<Avatar.Fallback>{Avatar.initials('john paul calvo')}</Avatar.Fallback>
</Avatar.Root>
