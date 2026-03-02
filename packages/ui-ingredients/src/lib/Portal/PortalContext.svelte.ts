import {createSafeContext} from '$lib/createSafeContext.svelte.js';
import type {Accessor} from '../types.js';

interface PortalProviderProps {
  container?: HTMLElement | null;
}

export const [getPortalProviderPropsContext, setPortalProviderPropsContext] =
  createSafeContext<Accessor<PortalProviderProps>>();
