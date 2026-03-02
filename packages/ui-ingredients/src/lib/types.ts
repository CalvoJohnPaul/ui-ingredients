/** biome-ignore-all lint/suspicious/noExplicitAny: "" */

import type {Snippet} from 'svelte';
import type {SvelteHTMLElements} from 'svelte/elements';
import type {Merge} from 'type-fest';

export type Accessor<T> = () => T;

type SvelteHTMLElement = keyof {
  [K in keyof SvelteHTMLElements as string extends K
    ? never
    : number extends K
      ? never
      : K]: string;
};

type HtmlProps<T extends SvelteHTMLElement> = SvelteHTMLElements[T];

export type AsChild<Context extends Record<string, any> = never> = [Context] extends [never]
  ? Snippet<[props: Accessor<Record<string, any>>]>
  : Snippet<[props: Accessor<Record<string, any>>, context: Accessor<Context>]>;

export type Children<Context extends Record<string, any> = never> = [Context] extends [never]
  ? Snippet<[]>
  : Snippet<[context: Accessor<Context>]>;

export type HtmlIngredientProps<
  T extends SvelteHTMLElement,
  Ref extends Element = HTMLElement,
  Context extends Record<string, any> = never,
> = Merge<
  HtmlProps<T>,
  {ref?: Ref | null; asChild?: AsChild<Context>; children?: Children<Context>}
>;
