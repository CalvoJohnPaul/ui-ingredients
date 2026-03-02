import {createSafeContext} from '$lib/createSafeContext.svelte.js';
import type {Locale} from '@zag-js/i18n-utils';
import type {Accessor} from '../types.js';

export const [getLocaleContext, setLocaleContext] = createSafeContext<Accessor<Locale>>();
