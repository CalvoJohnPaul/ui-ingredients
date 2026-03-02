import type {Accessor} from '$lib/types.js';
import type {NodeProps} from '@zag-js/tree-view';
import {createContext} from 'svelte';
import type {CreateTreeViewReturn} from './createTreeView.svelte.js';

export const [getTreeViewContext, setTreeViewContext] =
  createContext<Accessor<CreateTreeViewReturn>>();
export const [getTreeViewNodePropsContext, setTreeViewNodePropsContext] =
  createContext<Accessor<NodeProps>>();
