import type {Accessor} from '$lib/types.js';
import * as qrCode from '@zag-js/qr-code';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {getEnvironmentContext} from '../EnvironmentProvider/EnvironmentProviderContext.svelte.js';
import {getLocaleContext} from '../LocaleProvider/LocaleProviderContext.svelte.js';

export interface CreateQrCodeProps extends Omit<qrCode.Props, 'dir' | 'getRootNode'> {}

export interface CreateQrCodeReturn extends qrCode.Api {}

export function createQRCode(props: Accessor<CreateQrCodeProps>): Accessor<CreateQrCodeReturn> {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(qrCode.machine, () => ({
    dir: locale?.().dir,
    getRootNode: environment?.().getRootNode,
    ...props(),
  }));

  return () => qrCode.connect(service, normalizeProps);
}
