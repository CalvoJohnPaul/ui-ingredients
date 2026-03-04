import {getEnvironmentContext} from '$lib/EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import type {Accessor} from '$lib/types.js';
import * as marquee from '@zag-js/marquee';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreateMarqueeProps extends Omit<marquee.Props, 'dir' | 'getRootNode'> {}
export interface CreateMarqueeReturn extends marquee.Api {}

export function createMarquee(props: Accessor<CreateMarqueeProps>): Accessor<CreateMarqueeReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(marquee.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => marquee.connect(service, normalizeProps);
}
