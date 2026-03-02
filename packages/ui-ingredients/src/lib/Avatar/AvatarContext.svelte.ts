import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateAvatarReturn} from './createAvatar.svelte.js';

export const [getAvatarContext, setAvatarContext] = createContext<Accessor<CreateAvatarReturn>>();
