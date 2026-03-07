<script lang="ts">
import {
	CalendarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@untitled-theme/icons-svelte';
import {DatePicker, Portal} from 'ui-ingredients';
import IconButton from '$components/ui/IconButton.svelte';
import Input from '$components/ui/Input.svelte';
import Label from '$components/ui/Label.svelte';

let cellStyle = [
	'flex',
	'items-center',
	'justify-center',
	'rounded',
	'transition-colors',
	'duration-150',

	'hover:bg-neutral-50',
	'hover:ui-selected:bg-indigo-600',
	'dark:hover:ui-selected:bg-indigo-500',
	'dark:hover:bg-neutral-800/50',
	'hover:ui-disabled:bg-transparent',

	'ui-disabled:cursor-not-allowed',
	'ui-disabled:opacity-50',

	'ui-selected:font-semibold',
	'ui-selected:text-white',
	'ui-selected:bg-indigo-600',
	'dark:ui-selected:bg-indigo-500',

	'ui-today:text-indigo-500',
	'ui-today:ui-selected:text-white',
	'dark:ui-today:text-indigo-600',
	'dark:ui-today:ui-selected:text-white',
];

let viewControlStyle = [
	'flex',
	'items-center',
	'justify-between',
	'border-b',
	'border-neutral-200',
	'px-4',
	'py-3',
	'dark:border-neutral-800',
];

let prevOrNextTriggerStyle = [
	'flex',
	'size-10',
	'items-center',
	'justify-center',
	'rounded',
	'transition-colors',
	'duration-150',
	'hover:bg-neutral-50',
	'dark:hover:bg-neutral-800/50',
];

let rangeTextStyle = [
	'rounded',
	'px-2',
	'py-1',
	'font-semibold',
	'hover:bg-neutral-50',
	'dark:hover:bg-neutral-800/50',
];
</script>

<DatePicker.Root
	class="mx-auto max-w-[20rem]"
	fixedWeeks
	lazyMount
	positioning={{
    sameWidth: true,
  }}
>
	{#snippet children(api)}
		<DatePicker.Label>
			{#snippet asChild(props)}
				<Label {...props()}>Label</Label>
			{/snippet}
		</DatePicker.Label>
		<DatePicker.Control class="flex gap-2">
			<DatePicker.Input>
				{#snippet asChild(props)}
					<Input {...props()} />
				{/snippet}
			</DatePicker.Input>
			<DatePicker.Trigger>
				{#snippet asChild(props)}
					<IconButton {...props()}> <CalendarIcon /> </IconButton>
				{/snippet}
			</DatePicker.Trigger>
		</DatePicker.Control>

		<Portal>
			<DatePicker.Positioner>
				<DatePicker.Content
					class={[
						'overflow-hidden',
						'rounded',
						'border',
						'border-neutral-200',
						'bg-white',
						'dark:border-neutral-800',
						'dark:bg-neutral-900',
						
						'ui-placement-bottom:ui-open:animate-popover-in-bottom',
						'ui-placement-bottom-start:ui-open:animate-popover-in-bottom',
						'ui-placement-bottom-end:ui-open:animate-popover-in-bottom',
						'ui-placement-bottom:ui-closed:animate-popover-out-bottom',
						'ui-placement-bottom-start:ui-closed:animate-popover-out-bottom',
						'ui-placement-bottom-end:ui-closed:animate-popover-out-bottom',

						'ui-placement-top:ui-open:animate-popover-in-top',
						'ui-placement-top-start:ui-open:animate-popover-in-top',
						'ui-placement-top-end:ui-open:animate-popover-in-top',
						'ui-placement-top:ui-closed:animate-popover-out-top',
						'ui-placement-top-start:ui-closed:animate-popover-out-top',
						'ui-placement-top-end:ui-closed:animate-popover-out-top',

						'ui-placement-left:ui-open:animate-popover-in-left',
						'ui-placement-left-start:ui-open:animate-popover-in-left',
						'ui-placement-left-end:ui-open:animate-popover-in-left',
						'ui-placement-left:ui-closed:animate-popover-out-left',
						'ui-placement-left-start:ui-closed:animate-popover-out-left',
						'ui-placement-left-end:ui-closed:animate-popover-out-left',

						'ui-placement-right:ui-open:animate-popover-in-right',
						'ui-placement-right-start:ui-open:animate-popover-in-right',
						'ui-placement-right-end:ui-open:animate-popover-in-right',
						'ui-placement-right:ui-closed:animate-popover-out-right',
						'ui-placement-right-start:ui-closed:animate-popover-out-right',
						'ui-placement-right-end:ui-closed:animate-popover-out-right',
					]}
				>
					<DatePicker.View view="day">
						<DatePicker.ViewControl class={viewControlStyle}>
							<DatePicker.PrevTrigger class={prevOrNextTriggerStyle}>
								<ChevronLeftIcon />
							</DatePicker.PrevTrigger>
							<DatePicker.ViewTrigger>
								<DatePicker.RangeText class={rangeTextStyle} />
							</DatePicker.ViewTrigger>
							<DatePicker.NextTrigger class={prevOrNextTriggerStyle}>
								<ChevronRightIcon />
							</DatePicker.NextTrigger>
						</DatePicker.ViewControl>

						<div class="p-4">
							<DatePicker.Table class="w-full">
								<DatePicker.TableHead>
									<DatePicker.TableRow>
										{#each api().weekDays as weekDay}
											<DatePicker.TableHeader>
												<div
													class="flex aspect-square w-full items-center justify-center text-sm"
												>
													{weekDay.narrow}
												</div>
											</DatePicker.TableHeader>
										{/each}
									</DatePicker.TableRow>
								</DatePicker.TableHead>

								<DatePicker.TableBody>
									{#each api().weeks as week}
										<DatePicker.TableRow>
											{#each week as day}
												<DatePicker.DayTableCell value={day}>
													<DatePicker.DayTableCellTrigger
														class={[cellStyle, 'aspect-square w-full']}
													>
														{day.day}
													</DatePicker.DayTableCellTrigger>
												</DatePicker.DayTableCell>
											{/each}
										</DatePicker.TableRow>
									{/each}
								</DatePicker.TableBody>
							</DatePicker.Table>
						</div>
					</DatePicker.View>

					<!-- MONTH -->
					<DatePicker.View view="month">
						<DatePicker.ViewControl class={viewControlStyle}>
							<DatePicker.PrevTrigger class={prevOrNextTriggerStyle}>
								<ChevronLeftIcon />
							</DatePicker.PrevTrigger>
							<DatePicker.ViewTrigger>
								<DatePicker.RangeText class={rangeTextStyle} />
							</DatePicker.ViewTrigger>
							<DatePicker.NextTrigger class={prevOrNextTriggerStyle}>
								<ChevronRightIcon />
							</DatePicker.NextTrigger>
						</DatePicker.ViewControl>

						<div class="p-4">
							<DatePicker.Table class="w-full">
								<DatePicker.TableBody>
									{#each api().getMonthsGrid( {columns: 4, format: 'short'}, ) as months}
										<DatePicker.TableRow>
											{#each months as month}
												<DatePicker.MonthTableCell value={month.value}>
													<DatePicker.MonthTableCellTrigger
														class={[cellStyle, 'aspect-video w-full']}
													>
														{month.label}
													</DatePicker.MonthTableCellTrigger>
												</DatePicker.MonthTableCell>
											{/each}
										</DatePicker.TableRow>
									{/each}
								</DatePicker.TableBody>
							</DatePicker.Table>
						</div>
					</DatePicker.View>

					<!-- YEAR -->
					<DatePicker.View view="year">
						<DatePicker.ViewControl class={viewControlStyle}>
							<DatePicker.PrevTrigger class={prevOrNextTriggerStyle}>
								<ChevronLeftIcon />
							</DatePicker.PrevTrigger>
							<DatePicker.ViewTrigger>
								<DatePicker.RangeText class={rangeTextStyle} />
							</DatePicker.ViewTrigger>
							<DatePicker.NextTrigger class={prevOrNextTriggerStyle}>
								<ChevronRightIcon />
							</DatePicker.NextTrigger>
						</DatePicker.ViewControl>

						<div class="p-4">
							<DatePicker.Table class="w-full">
								<DatePicker.TableBody>
									{#each api().getYearsGrid({columns: 4}) as years}
										<DatePicker.TableRow>
											{#each years as year}
												<DatePicker.YearTableCell value={year.value}>
													<DatePicker.YearTableCellTrigger
														class={[cellStyle, 'aspect-video w-full']}
													>
														{year.label}
													</DatePicker.YearTableCellTrigger>
												</DatePicker.YearTableCell>
											{/each}
										</DatePicker.TableRow>
									{/each}
								</DatePicker.TableBody>
							</DatePicker.Table>
						</div>
					</DatePicker.View>
				</DatePicker.Content>
			</DatePicker.Positioner>
		</Portal>
	{/snippet}
</DatePicker.Root>
