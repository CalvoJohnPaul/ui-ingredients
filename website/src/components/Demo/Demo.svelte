<script lang="ts">
import type {Component} from 'svelte';
import Accordion from './Accordion.svelte';
import Alert from './Alert.svelte';
import AlertDialog from './AlertDialog.svelte';
import AngleSlider from './AngleSlider.svelte';
import Avatar from './Avatar.svelte';
import Carousel from './Carousel.svelte';
import Checkbox from './Checkbox.svelte';
import Clipboard from './Clipboard.svelte';
import Collapsible from './Collapsible.svelte';
import ColorPicker from './ColorPicker.svelte';
import Combobox from './Combobox.svelte';
import DatePicker from './DatePicker.svelte';
import Dialog from './Dialog.svelte';
import Drawer from './Drawer.svelte';
import Editable from './Editable.svelte';
import Field from './Field.svelte';
import FileUpload from './FileUpload.svelte';
import FloatingPanel from './FloatingPanel.svelte';
import HoverCard from './HoverCard.svelte';
import Marquee from './Marquee.svelte';
import Menu from './Menu.svelte';
import NumberInput from './NumberInput.svelte';
import Pagination from './Pagination.svelte';
import PasswordInput from './PasswordInput.svelte';
import PinInput from './PinInput.svelte';
import Popover from './Popover.svelte';
import ProgressCircular from './ProgressCircular.svelte';
import ProgressLinear from './ProgressLinear.svelte';
import QrCode from './QrCode.svelte';
import RadioGroup from './RadioGroup.svelte';
import RatingGroup from './RatingGroup.svelte';
import ScrollArea from './ScrollArea.svelte';
import SegmentGroup from './SegmentGroup.svelte';
import Select from './Select.svelte';
import SignaturePad from './SignaturePad.svelte';
import Slider from './Slider.svelte';
import Steps from './Steps.svelte';
import Switch from './Switch.svelte';
import Tabs from './Tabs.svelte';
import TagsInput from './TagsInput.svelte';
import Timer from './Timer.svelte';
import Toast from './Toast.svelte';
import Toggle from './Toggle.svelte';
import ToggleGroup from './ToggleGroup.svelte';
import Tooltip from './Tooltip.svelte';
import Tour from './Tour.svelte';
import TreeView from './TreeView.svelte';

const MAP: Record<string, Component | null> = {
	alert: Alert,
	'alert-dialog': AlertDialog,
	'angle-slider': AngleSlider,
	'color-picker': ColorPicker,
	'date-picker': DatePicker,
	'file-upload': FileUpload,
	'floating-panel': FloatingPanel,
	'focus-trap': null,
	'hover-card': HoverCard,
	'number-input': NumberInput,
	'pin-input': PinInput,
	'progress-circular': ProgressCircular,
	'progress-linear': ProgressLinear,
	'qr-code': QrCode,
	'radio-group': RadioGroup,
	'rating-group': RatingGroup,
	'segment-group': SegmentGroup,
	'signature-pad': SignaturePad,
	'scroll-area': ScrollArea,
	'tags-input': TagsInput,
	'toggle-group': ToggleGroup,
	'tree-view': TreeView,
	accordion: Accordion,
	avatar: Avatar,
	carousel: Carousel,
	checkbox: Checkbox,
	clipboard: Clipboard,
	collapsible: Collapsible,
	combobox: Combobox,
	dialog: Dialog,
	drawer: Drawer,
	editable: Editable,
	highlight: null,
	field: Field,
	menu: Menu,
	marquee: Marquee,
	pagination: Pagination,
	popover: Popover,
	presence: null,
	select: Select,
	slider: Slider,
	steps: Steps,
	switch: Switch,
	tabs: Tabs,
	timer: Timer,
	toast: Toast,
	tooltip: Tooltip,
	tour: Tour,
	toggle: Toggle,
	'password-input': PasswordInput,
};

let {id}: {id: string} = $props();

let Subject = $derived(MAP[id]);
</script>

{#if Subject}
	<div
		class="not-prose rounded-md bg-neutral-50 p-5 md:p-10 lg:p-12 dark:border dark:border-neutral-800/40 dark:bg-neutral-900/40"
	>
		<Subject />
	</div>
{/if}
