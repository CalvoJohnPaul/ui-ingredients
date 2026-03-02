import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreateEditableReturn} from './createEditable.svelte.js';

export const [getEditableContext, setEditableContext] =
  createContext<Accessor<CreateEditableReturn>>();
