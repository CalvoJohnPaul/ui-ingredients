export * as Carousel from './Carousel.js';

export type {CarouselAutoplayTriggerProps} from './CarouselAutoplayTrigger.svelte';
export type {CarouselControlProps} from './CarouselControl.svelte';
export type {CarouselIndicatorProps} from './CarouselIndicator.svelte';
export type {CarouselIndicatorGroupProps} from './CarouselIndicatorGroup.svelte';
export type {CarouselItemProps} from './CarouselItem.svelte';
export type {CarouselItemGroupProps} from './CarouselItemGroup.svelte';
export type {CarouselNextTriggerProps} from './CarouselNextTrigger.svelte';
export type {CarouselPrevTriggerProps} from './CarouselPrevTrigger.svelte';
export type {CarouselProgressTextProps} from './CarouselProgressText.svelte';
export type {CarouselProps} from './CarouselRoot.svelte';

export {
  getCarouselContext,
  setCarouselContext,
} from './CarouselContext.svelte.js';
export {
  createCarousel,
  type CreateCarouselProps,
  type CreateCarouselReturn,
} from './createCarousel.svelte.js';

export {anatomy as carouselAnatomy} from '@zag-js/carousel';
