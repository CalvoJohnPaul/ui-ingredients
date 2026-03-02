import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreatePaginationReturn} from './createPagination.svelte.js';

export const [getPaginationContext, setPaginationContext] =
  createContext<Accessor<CreatePaginationReturn>>();
