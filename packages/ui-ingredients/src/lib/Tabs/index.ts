export * as Tabs from './Tabs.js';

export type {TabsContentProps} from './TabsContent.svelte';
export type {TabsIndicatorProps} from './TabsIndicator.svelte';
export type {TabsListProps} from './TabsList.svelte';
export type {TabsProps} from './TabsRoot.svelte';
export type {TabsTriggerProps} from './TabsTrigger.svelte';

export {
  createTabs,
  type CreateTabsProps,
  type CreateTabsReturn,
} from './createTabs.svelte.js';
export {getTabsContext, setTabsContext} from './TabsContext.svelte.js';

export {anatomy as tabsAnatomy} from '@zag-js/tabs';
