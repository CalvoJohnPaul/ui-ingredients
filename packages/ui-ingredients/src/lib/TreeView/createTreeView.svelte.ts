import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as treeView from '@zag-js/tree-view';

export interface CreateTreeViewProps extends Omit<treeView.Props, 'dir' | 'getRootNode'> {}
export interface CreateTreeViewReturn extends treeView.Api {}

export function createTreeView(
  props: Accessor<CreateTreeViewProps>,
): Accessor<CreateTreeViewReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(treeView.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => treeView.connect(service, normalizeProps);
}
