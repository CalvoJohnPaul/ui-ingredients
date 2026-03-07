import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateAlertDialogReturn} from './createAlertDialog.svelte.js';

export const [getAlertDialogContext, setAlertDialogContext] =
  createContext<Accessor<CreateAlertDialogReturn>>();
