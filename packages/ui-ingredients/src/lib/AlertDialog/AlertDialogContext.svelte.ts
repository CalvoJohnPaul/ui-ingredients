import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateAlertDialogReturn} from './createAlertDialog.svelte.js';

export const [getAlertDialogContext, setAlertDialogContext] =
  createContext<Accessor<CreateAlertDialogReturn>>();
