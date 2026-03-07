import {getDocument, getWindow} from '@zag-js/dom-query';
import type {HTMLAttributes} from 'svelte/elements';
import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import {anatomy} from './Alert.anatomy.js';

interface ElementIds {
  root: string;
  title: string;
  description: string;
}

export interface CreateAlertProps {
  id: string;
  ids?: ElementIds;
}

export interface CreateAlertReturn {
  getRootProps(): HTMLAttributes<HTMLElement>;
  getTitleProps(): HTMLAttributes<HTMLElement>;
  getDescriptionProps(): HTMLAttributes<HTMLElement>;
}

const parts = anatomy.build();

export function createAlert(props: Accessor<CreateAlertProps>): Accessor<CreateAlertReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = $derived(props().id);
  const ids: ElementIds = $derived({
    root: props().ids?.root ?? `alert:${id}`,
    title: props().ids?.title ?? `alert:${id}:title`,
    description: props().ids?.description ?? `alert:${id}:description`,
  });

  let hasTitle = $state(false);
  let hasDescription = $state(false);

  $effect(() => {
    const rootNode = environment?.().getRootNode() ?? document;

    const doc = getDocument(rootNode);
    const win = getWindow(rootNode);

    function handler() {
      hasTitle = doc.getElementById(ids.title) !== null;
      hasDescription = doc.getElementById(ids.description) !== null;
    }

    handler();

    const observer = new win.MutationObserver(handler);
    observer.observe(rootNode, {childList: true, subtree: true});

    return () => observer.disconnect();
  });

  function getRootProps(): HTMLAttributes<HTMLElement> {
    return {
      id: ids.root,
      dir: locale?.().dir,
      role: 'alert',
      'aria-labelledby': hasTitle ? ids.title : undefined,
      'aria-describedby': hasDescription ? ids.description : undefined,
      ...parts.root.attrs,
    };
  }

  function getTitleProps(): HTMLAttributes<HTMLElement> {
    return {
      id: ids.title,
      dir: locale?.().dir,
      ...parts.title.attrs,
    };
  }

  function getDescriptionProps(): HTMLAttributes<HTMLElement> {
    return {
      id: ids.description,
      dir: locale?.().dir,
      ...parts.description.attrs,
    };
  }

  return () => ({
    getRootProps,
    getTitleProps,
    getDescriptionProps,
  });
}
