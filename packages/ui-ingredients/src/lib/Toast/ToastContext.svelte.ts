import type {Accessor} from '$lib/types.js';
import * as toast from '@zag-js/toast';
import {createContext} from 'svelte';

export const [getToastContext, setToastContext] = createContext<Accessor<toast.Api>>();
