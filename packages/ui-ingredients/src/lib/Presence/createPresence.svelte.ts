import * as presence from '@zag-js/presence';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {createAttachmentKey} from 'svelte/attachments';
import type {HTMLAttributes} from 'svelte/elements';
import type {Merge} from 'type-fest';
import type {Accessor} from '../types.js';

export interface PresenceStrategyProps {
  /** @default false */
  lazyMount?: boolean;
  /** @default true */
  keepMounted?: boolean;
  /** @default true */
  animateOnMount?: boolean;
  onExitComplete?: () => void;
}

export interface CreatePresenceProps extends Merge<PresenceStrategyProps, presence.Props> {}

export interface CreatePresenceReturn {
  getPresenceProps(): HTMLAttributes<HTMLElement>;
  mounted: boolean;
}

export function createPresence(
  props: Accessor<CreatePresenceProps>,
): Accessor<CreatePresenceReturn> {
  const {
    present,
    immediate,
    lazyMount = false,
    keepMounted = true,
    animateOnMount = true,
    onExitComplete,
  } = $derived(props());

  const service = useMachine(presence.machine, () => ({
    present,
    immediate,
    onExitComplete,
  }));

  const api = $derived(presence.connect(service, normalizeProps));

  function getPresenceProps(): HTMLAttributes<HTMLElement> {
    return {
      hidden: !api.present,
      'data-state': api.skip && !animateOnMount ? undefined : present ? 'open' : 'closed',
      [createAttachmentKey()]: (node) => {
        api.setNode(node);
        return api.setNode(null);
      },
    };
  }

  let wasPresent = $state(false);

  $effect.pre(() => {
    if (api.present) {
      wasPresent = true;
    }
  });

  const unmounted = $derived.by(() => {
    if (!api.present && !wasPresent && lazyMount) return true;
    if (!keepMounted && !api.present && wasPresent) return true;
    return false;
  });

  return () => ({
    getPresenceProps,
    mounted: !unmounted,
  });
}
