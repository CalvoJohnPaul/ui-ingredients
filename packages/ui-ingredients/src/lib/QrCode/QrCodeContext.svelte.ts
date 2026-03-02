import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateQrCodeReturn} from './createQrCode.svelte.js';

export const [getQrCodeContext, setQrCodeContext] = createContext<Accessor<CreateQrCodeReturn>>();
