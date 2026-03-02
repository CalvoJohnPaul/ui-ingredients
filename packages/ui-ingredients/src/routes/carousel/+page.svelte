<script lang="ts">
import {Carousel} from '$lib/index.js';
import ChevronLeftIcon from '../@icons/ChevronLeftIcon.svelte';
import ChevronRightIcon from '../@icons/ChevronRightIcon.svelte';

let items = [
	'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

let page = $state(0);

$inspect({page});
</script>

<Carousel.Root
	{page}
	onPageChange={(detail) => {
    page = detail.page;
  }}
	slideCount={items.length}
	slidesPerPage={1}
>
	<Carousel.ItemGroup>
		{#each items as src, index}
			<Carousel.Item {index}>
				<img {src} alt="" style="width:100%;height:100%;object-fit:cover;">
			</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>

	<Carousel.Control>
		<Carousel.PrevTrigger>
			<ChevronLeftIcon style="width:20px;height:20px;" />
		</Carousel.PrevTrigger>
		<Carousel.IndicatorGroup>
			{#each items as _, index}
				<Carousel.Indicator {index} />
			{/each}
		</Carousel.IndicatorGroup>
		<Carousel.NextTrigger>
			<ChevronRightIcon style="width:20px;height:20px;" />
		</Carousel.NextTrigger>
	</Carousel.Control>
</Carousel.Root>
