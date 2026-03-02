<script lang="ts" module>
import type {Snippet} from 'svelte';

export interface LocaleProviderProps {
	locale: string;
	children: Snippet;
}
</script>

<script lang="ts">
import {isRTL} from '@zag-js/i18n-utils';
import {setLocaleContext} from './LocaleProviderContext.svelte.js';

let {locale, children}: LocaleProviderProps = $props();

setLocaleContext(() => ({
	dir: isRTL(locale) ? 'rtl' : 'ltr',
	locale,
}));
</script>

{@render children()}
