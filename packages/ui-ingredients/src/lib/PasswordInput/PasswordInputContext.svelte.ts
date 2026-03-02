import type {Accessor} from '$lib/types.js';
import {createContext} from 'svelte';
import type {CreatePasswordInputReturn} from './createPasswordInput.svelte.js';

export const [getPasswordInputContext, setPasswordInputContext] =
  createContext<Accessor<CreatePasswordInputReturn>>();
