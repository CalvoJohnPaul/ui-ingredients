<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import type {
	CreatePasswordInputProps,
	CreatePasswordInputReturn,
} from './createPasswordInput.svelte.js';
import {createPasswordInputContext} from './createPasswordInput.svelte.js';
import {setPasswordInputContext} from './PasswordInputContext.svelte.js';

export interface PasswordInputProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreatePasswordInputReturn>,
		SetOptional<CreatePasswordInputProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PasswordInputProps = $props();

let createPasswordInputPropKeys = defineKeyset<CreatePasswordInputProps>()([
	'id',
	'defaultVisible',
	'visible',
	'onVisibilityChange',
	'ids',
	'disabled',
	'invalid',
	'readOnly',
	'required',
	'translations',
	'ignorePasswordManagers',
	'autoComplete',
	'name',
]);

let [createPasswordInputProps, localProps] = $derived(
	splitProps(props, createPasswordInputPropKeys),
);

let id = $props.id();
let PasswordInput = createPasswordInputContext(() => ({
	id,
	...createPasswordInputProps,
}));

let mergedProps = $derived(
	mergeProps(PasswordInput().getRootProps(), localProps),
);

setPasswordInputContext(PasswordInput);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, PasswordInput)}
{:else}
	<div bind:this={ref} {...mergedProps}>
		{@render children?.(PasswordInput)}
	</div>
{/if}
