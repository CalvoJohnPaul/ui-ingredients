import {createSafeContext} from '$lib/createSafeContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import type {CreateFieldReturn} from './createField.svelte.js';

export const [getFieldContext, setFieldContext] = createSafeContext<Accessor<CreateFieldReturn>>();
