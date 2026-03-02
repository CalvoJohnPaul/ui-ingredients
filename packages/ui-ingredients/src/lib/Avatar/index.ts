export * as Avatar from './Avatar.js';

export type {AvatarFallbackProps} from './AvatarFallback.svelte';
export type {AvatarImageProps} from './AvatarImage.svelte';
export type {AvatarProps} from './AvatarRoot.svelte';

export {getAvatarContext, setAvatarContext} from './AvatarContext.svelte.js';
export {
  createAvatar,
  type CreateAvatarProps,
  type CreateAvatarReturn,
} from './createAvatar.svelte.js';

export {anatomy as avatarAnatomy} from '@zag-js/avatar';
