<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {setAvatarContext} from './AvatarContext.svelte.js';
import {
	type CreateAvatarProps,
	type CreateAvatarReturn,
	createAvatar,
} from './createAvatar.svelte.js';

export interface AvatarProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateAvatarReturn>,
		SetOptional<CreateAvatarProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AvatarProps = $props();

let createAvatarPropKeys = defineKeyset<CreateAvatarProps>()([
	'id',
	'onStatusChange',
	'ids',
]);

let [createAvatarProps, localProps] = $derived(
	splitProps(props, createAvatarPropKeys),
);

let id = $props.id();
let avatar = createAvatar(() => ({id, ...createAvatarProps}));
let mergedProps = $derived(mergeProps(avatar().getRootProps(), localProps));

setAvatarContext(avatar);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, avatar)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(avatar)}</div>
{/if}
