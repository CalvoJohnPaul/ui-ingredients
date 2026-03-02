<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {setAvatarContext} from './AvatarContext.svelte.js';
import {
	createAvatar,
	type CreateAvatarProps,
	type CreateAvatarReturn,
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

let createAvatarPropKeys: UnionToTuple<keyof CreateAvatarProps> = [
	'id',
	'onStatusChange',
	'ids',
];

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
