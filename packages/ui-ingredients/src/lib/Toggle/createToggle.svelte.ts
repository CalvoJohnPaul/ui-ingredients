import {normalizeProps, useMachine} from '@zag-js/svelte';
import * as toggle from '@zag-js/toggle';
import type {Accessor} from '$lib/types.js';

export interface CreateToggleProps extends toggle.Props {}
export interface CreateToggleReturn extends toggle.Api {}

export function createToggle(props: Accessor<CreateToggleProps>): Accessor<CreateToggleReturn> {
  const service = useMachine(toggle.machine, props);
  return () => toggle.connect(service, normalizeProps);
}
