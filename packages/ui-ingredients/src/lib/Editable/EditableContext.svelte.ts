import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateEditableReturn} from './createEditable.svelte.js';

export const [getEditableContext, setEditableContext] =
  createContext<Accessor<CreateEditableReturn>>();
