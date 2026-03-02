export * as QrCode from './QrCode.js';

export type {QrCodeDownloadTriggerProps} from './QrCodeDownloadTrigger.svelte';
export type {QrCodeFrameProps} from './QrCodeFrame.svelte';
export type {QrCodeOverlayProps} from './QrCodeOverlay.svelte';
export type {QrCodePatternProps} from './QrCodePattern.svelte';
export type {QrCodeProps} from './QrCodeRoot.svelte';

export {
  createQRCode,
  type CreateQrCodeProps,
  type CreateQrCodeReturn,
} from './createQrCode.svelte.js';
export {getQrCodeContext, setQrCodeContext} from './QrCodeContext.svelte.js';

export {anatomy as qrCodeAnatomy} from '@zag-js/qr-code';
