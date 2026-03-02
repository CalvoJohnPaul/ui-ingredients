import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateDialogReturn} from './createDialog.svelte.js';

export const [getDialogContext, setDialogContext] = createContext<Accessor<CreateDialogReturn>>();
