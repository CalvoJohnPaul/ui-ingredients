import type {Accessor} from '$lib/types.js';
import * as segmentGroup from '@zag-js/radio-group';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';
import {parts} from './SegmentGroup.anatomy.js';

export interface CreateSegmentGroupProps extends Omit<segmentGroup.Props, 'dir' | 'getRootNode'> {}

export interface CreateSegmentGroupReturn extends segmentGroup.Api {}

export function createSegmentGroup(
  props: Accessor<CreateSegmentGroupProps>,
): Accessor<CreateSegmentGroupReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(segmentGroup.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return (): segmentGroup.Api => {
    const api = segmentGroup.connect(service, normalizeProps);

    return {
      ...api,
      getIndicatorProps() {
        return {
          ...api.getIndicatorProps(),
          ...parts.indicator.attrs,
        };
      },
      getItemControlProps(props) {
        return {
          ...api.getItemControlProps(props),
          ...parts.itemControl.attrs,
        };
      },
      getItemProps(props) {
        return {
          ...api.getItemProps(props),
          ...parts.item.attrs,
        };
      },
      getItemTextProps(props) {
        return {
          ...api.getItemTextProps(props),
          ...parts.itemText.attrs,
        };
      },
      getLabelProps() {
        return {
          ...api.getLabelProps(),
          ...parts.label.attrs,
        };
      },
      getRootProps() {
        return {
          ...api.getRootProps(),
          ...parts.root.attrs,
        };
      },
    };
  };
}
