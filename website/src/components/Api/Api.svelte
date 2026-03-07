<script lang="ts">
import {MinusIcon} from '@untitled-theme/icons-svelte';
import Table from '$components/ui/Table';
import accordion from './Accordion';
import alert from './Alert';
import alertDialog from './AlertDialog';
import angleSlider from './AngleSlider';
import avatar from './Avatar';
import carousel from './Carousel';
import checkbox from './Checkbox';
import clipboard from './Clipboard';
import collapsible from './Collapsible';
import colorPicker from './ColorPicker';
import combobox from './Combobox';
import datePicker from './DatePicker';
import dialog from './Dialog';
import drawer from './Drawer';
import editable from './Editable';
import environmentProvider from './EnvironmentProvider';
import field from './Field';
import fileUpload from './FileUpload';
import floatingPanel from './FloatingPanel';
import focusTrap from './FocusTrap';
import highlight from './Highlight';
import hoverCard from './HoverCard';
import localeProvider from './LocaleProvider';
import marquee from './Marquee';
import menu from './Menu';
import numberInput from './NumberInput';
import pagination from './Pagination';
import passwordInput from './PasswordInput';
import pinInput from './PinInput';
import popover from './Popover';
import portal from './Portal';
import presence from './Presence';
import progress from './Progress';
import qrCode from './QrCode';
import radioGroup from './RadioGroup';
import ratingGroup from './RatingGroup';
import scrollArea from './ScrollArea';
import segmentGroup from './SegmentGroup';
import select from './Select';
import signaturePad from './SignaturePad';
import slider from './Slider';
import splitter from './Splitter';
import steps from './Steps';
import switchApi from './Switch';
import tabs from './Tabs';
import tagsInput from './TagsInput';
import timer from './Timer';
import toast from './Toast';
import toggle from './Toggle';
import toggleGroup from './ToggleGroup';
import tooltip from './Tooltip';
import tour from './Tour';
import treeView from './TreeView';
import type {ApiEntries} from './utils';

const MAP: Record<string, ApiEntries> = {
	alert,
	'alert-dialog': alertDialog,
	'angle-slider': angleSlider,
	'color-picker': colorPicker,
	'date-picker': datePicker,
	'environment-provider': environmentProvider,
	'file-upload': fileUpload,
	'floating-panel': floatingPanel,
	'focus-trap': focusTrap,
	'hover-card': hoverCard,
	'locale-provider': localeProvider,
	marquee,
	'number-input': numberInput,
	'pin-input': pinInput,
	'progress-circular': progress,
	'progress-linear': progress,
	'qr-code': qrCode,
	'radio-group': radioGroup,
	'rating-group': ratingGroup,
	'scroll-area': scrollArea,
	'segment-group': segmentGroup,
	'signature-pad': signaturePad,
	'tags-input': tagsInput,
	'toggle-group': toggleGroup,
	'tree-view': treeView,
	accordion,
	avatar,
	carousel,
	checkbox,
	clipboard,
	collapsible,
	combobox,
	dialog,
	drawer,
	editable,
	field,
	highlight,
	menu,
	pagination,
	popover,
	portal,
	presence,
	select,
	slider,
	splitter,
	steps,
	switch: switchApi,
	tabs,
	timer,
	toast,
	toggle,
	tooltip,
	tour,
	'password-input': passwordInput,
};

let {id}: {id: string} = $props();

let subject = $derived(MAP[id]);
let parts = $derived(
	Object.entries(subject).toSorted(([a], [b]) => {
		if (a.toLowerCase() === 'root') return -1;
		if (b.toLowerCase() === 'root') return 1;
		return a.localeCompare(b);
	}),
);
</script>

{#each parts as [ i, j ]}
	<h3>{i}</h3>

	<Table.Container class="not-prose">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Heading>Prop</Table.Heading>
					<Table.Heading>Default</Table.Heading>
					<Table.Heading>Description</Table.Heading>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{@const ctx = Object.entries(j?.context ?? {}).toSorted(([a], [b]) => {
          if (a.toLowerCase() === 'aschild') return 1;
          if (b.toLowerCase() === 'aschild') return -1;
          return a.localeCompare(b);
        })}

				{#each ctx as [ k, l ]}
					<Table.Row>
						<Table.Cell> {@render code(k)} </Table.Cell>
						<Table.Cell>
							{#if l.defaultValue}
								{@render code(l.defaultValue)}
							{:else}
								<MinusIcon
									class="size-3 text-neutral-400 dark:text-neutral-600"
								/>
							{/if}
						</Table.Cell>
						<Table.Cell>
							{@render code(l.type)}

							{#if l.description}
								<span class="mt-2 block"> {l.description} </span>
							{/if}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Table.Container>

	{#if j?.dataAttr}
		<Table.Container class="not-prose mt-8">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Heading>Data Attribute</Table.Heading>
						<Table.Heading>Value</Table.Heading>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each Object.entries(j.dataAttr).toSorted( ([a], [b]) => a.localeCompare(b), ) as [ k, v ]}
						<Table.Row>
							<Table.Cell> {@render code(k)} </Table.Cell>
							<Table.Cell>{@html v}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Table.Container>
	{/if}
{/each}

{#snippet code(
  children: string,
  opts?: {
    id?: string;
    style?: string;
    class?: string;
  },
)}
	<code
		id={opts?.id}
		style={opts?.style}
		class={[
      'inline-block whitespace-pre rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-xs font-medium [tab-size:0.75rem] dark:border-neutral-800 dark:bg-neutral-800/50',
      opts?.class,
    ]}
	>
		{children}
	</code>
{/snippet}
