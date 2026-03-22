import * as dialog from '@zag-js/dialog';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateDialogProps extends Omit<dialog.Props, 'dir' | 'role' | 'getRootNode'> {}

export interface CreateDialogReturn extends dialog.Api {}

export function createDialog(props: Accessor<CreateDialogProps>): Accessor<CreateDialogReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(
    dialog.machine,
    (): dialog.Props => ({
      dir: locale?.().dir,
      role: 'dialog',
      getRootNode: environment?.().getRootNode,
      ...props(),
    }),
  );

  return () => dialog.connect(service, normalizeProps);
}
