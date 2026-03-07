import * as dialog from '@zag-js/dialog';
import {mergeProps, normalizeProps, useMachine} from '@zag-js/svelte';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';
import {parts} from './AlertDialog.anatomy.js';

export interface CreateAlertDialogProps
  extends Omit<dialog.Props, 'dir' | 'role' | 'getRootNode'> {}

export interface CreateAlertDialogReturn extends dialog.Api {}

export function createAlertDialog(
  props: Accessor<CreateAlertDialogProps>,
): Accessor<CreateAlertDialogReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(
    dialog.machine,
    (): dialog.Props => ({
      dir: locale?.().dir,
      role: 'alertdialog',
      getRootNode: environment?.().getRootNode,
      ...props(),
    }),
  );

  return (): CreateAlertDialogReturn => {
    const api = dialog.connect(service, normalizeProps);

    return {
      ...api,
      getBackdropProps() {
        return mergeProps(api.getBackdropProps(), parts.backdrop.attrs);
      },
      getCloseTriggerProps() {
        return mergeProps(api.getCloseTriggerProps(), parts.closeTrigger.attrs);
      },
      getContentProps() {
        return mergeProps(api.getContentProps(), parts.content.attrs);
      },
      getDescriptionProps() {
        return mergeProps(api.getDescriptionProps(), parts.description.attrs);
      },
      getPositionerProps() {
        return mergeProps(api.getPositionerProps(), parts.positioner.attrs);
      },
      getTitleProps() {
        return mergeProps(api.getTitleProps(), parts.title.attrs);
      },
      getTriggerProps() {
        return mergeProps(api.getTriggerProps(), parts.trigger.attrs);
      },
    };
  };
}
