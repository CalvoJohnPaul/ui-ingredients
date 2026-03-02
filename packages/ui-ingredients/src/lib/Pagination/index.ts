export * as Pagination from './Pagination.js';

export type {PaginationEllipsisProps} from './PaginationEllipsis.svelte';
export type {PaginationFirstTriggerProps} from './PaginationFirstTrigger.svelte';
export type {PaginationItemProps} from './PaginationItem.svelte';
export type {PaginationLastTriggerProps} from './PaginationLastTrigger.svelte';
export type {PaginationNextTriggerProps} from './PaginationNextTrigger.svelte';
export type {PaginationPrevTriggerProps} from './PaginationPrevTrigger.svelte';
export type {PaginationProps} from './PaginationRoot.svelte';

export {
  createPagination,
  type CreatePaginationProps,
  type CreatePaginationReturn,
} from './createPagination.svelte.js';
export {
  getPaginationContext,
  setPaginationContext,
} from './PaginationContext.svelte.js';

export {anatomy as paginationAnatomy} from '@zag-js/pagination';
