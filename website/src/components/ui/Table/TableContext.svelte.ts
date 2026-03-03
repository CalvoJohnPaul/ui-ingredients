import {createContext} from 'svelte';
import {type Accessor} from 'ui-ingredients';
import type {CreateTableReturn} from './createTable.svelte';

export const [getTableContext, setTableContext] = createContext<Accessor<CreateTableReturn>>();
