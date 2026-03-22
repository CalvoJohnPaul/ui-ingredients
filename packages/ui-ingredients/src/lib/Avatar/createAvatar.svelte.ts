import * as avatar from '@zag-js/avatar';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Accessor} from '$lib/types.js';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateAvatarProps extends Omit<avatar.Props, 'dir' | 'getRootNode'> {}

export interface CreateAvatarReturn extends avatar.Api {}

export function createAvatar(props: Accessor<CreateAvatarProps>): Accessor<CreateAvatarReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(avatar.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => avatar.connect(service, normalizeProps);
}
