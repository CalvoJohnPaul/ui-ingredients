<script lang="ts">
import {Tour, type TourStepDetails} from '$lib/index.js';
import XIcon from '../@icons/XIcon.svelte';

const length = 5;
const steps = Array.from({length}).map((_, idx) => {
	const n = idx + 1;

	const actions: TourStepDetails['actions'] = [];

	if (n > 1) {
		actions.push({
			label: 'Prev',
			action: 'prev',
		});
	}

	if (n < 5) {
		actions.push({
			label: 'Next',
			action: 'next',
		});
	}

	if (n === length) {
		actions.push({
			label: 'Done',
			action: 'dismiss',
		});
	}

	const o: TourStepDetails = {
		type: 'tooltip',
		arrow: true,
		title: `Step ${n} Title`,
		description: `Step ${n} Description`,
		actions,
		target() {
			return document.getElementById(`step-${n}-target`);
		},
	};

	return o;
});
</script>

<Tour.Root {steps}>
	{#snippet children(tour)}
		{@const actions = tour().step?.actions ?? []}

		<Tour.Trigger>Start</Tour.Trigger>
		<Tour.Backdrop />
		<Tour.Spotlight />
		<Tour.Positioner>
			<Tour.Content>
				<Tour.CloseTrigger>
					<XIcon style="width:20px;height:20px;" />
				</Tour.CloseTrigger>

				<Tour.ProgressText />
				<Tour.Title />
				<Tour.Description />

				<div style="display:flex;gap:8px;margin-top:12px;">
					{#each actions as action}
						<Tour.ActionTrigger {action}> {action.label} </Tour.ActionTrigger>
					{/each}
				</div>
			</Tour.Content>
		</Tour.Positioner>
	{/snippet}
</Tour.Root>

<div style="display:flex;flex-direction:column;gap:12px;margin-top:24px;">
	{#each Array.from({length}) as _, idx}
		{@const n = idx + 1}

		<div id="step-{n}-target" style="width:fit-content;">Target {n}</div>
	{/each}
</div>
