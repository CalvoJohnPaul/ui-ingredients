import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateAlertReturn} from './createAlert.svelte.js';

export const [getAlertContext, setAlertContext] = createContext<Accessor<CreateAlertReturn>>();
