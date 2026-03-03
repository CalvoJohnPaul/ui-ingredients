<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {splitProps} from '$lib/splitProps.js';
import * as focusTrap from '@zag-js/focus-trap';
import {mergeProps} from '@zag-js/svelte';
import {BROWSER} from 'esm-env';
import {createAttachmentKey} from 'svelte/attachments';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';

interface FocusTrapOptions
	extends Omit<focusTrap.FocusTrapOptions, 'document'> {
	disabled?: boolean;
}

export interface FocusTrapProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, FocusTrapOptions> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FocusTrapProps = $props();

let focusTrapPropKeys = defineKeyset<FocusTrapOptions>()([
	'onActivate',
	'onPostActivate',
	'onPause',
	'onPostPause',
	'onUnpause',
	'onPostUnpause',
	'checkCanFocusTrap',
	'onDeactivate',
	'onPostDeactivate',
	'checkCanReturnFocus',
	'initialFocus',
	'fallbackFocus',
	'returnFocusOnDeactivate',
	'setReturnFocus',
	'escapeDeactivates',
	'clickOutsideDeactivates',
	'allowOutsideClick',
	'preventScroll',
	'delayInitialFocus',
	'isKeyForward',
	'isKeyBackward',
	'trapStack',
	'followControlledElements',
	'getShadowRoot',
	'disabled',
]);

let [focusTrapProps, localProps] = $derived(
	splitProps(props, focusTrapPropKeys),
);

let environment = getEnvironmentContext();

let focusTrapOptions: focusTrap.FocusTrapOptions = $derived({
	...focusTrapProps,
	document: BROWSER ? environment?.().getDocument() : undefined,
});

let mergedProps = $derived(
	mergeProps(localProps, {
		[createAttachmentKey()]: (node: HTMLDivElement) => {
			if (props.disabled) return;
			return focusTrap.trapFocus(node, focusTrapOptions);
		},
	}),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
