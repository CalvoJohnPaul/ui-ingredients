import * as toast from '@zag-js/toast';
import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';

export const [getToastContext, setToastContext] = createContext<Accessor<toast.Api>>();
