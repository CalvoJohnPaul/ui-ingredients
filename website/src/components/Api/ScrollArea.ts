import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {omit} from 'es-toolkit/compat';
import {scrollAreaAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('scroll-area');
const rootContext = getApiDoc('scroll-area').context;

export default apiEntryFromAnatomy(scrollAreaAnatomy)({
  Content: {
    dataAttr: dataAttrDoc.Content,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Corner: {
    dataAttr: dataAttrDoc.Corner,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Root: {
    dataAttr: dataAttrDoc.Root,
    context: {
      ...omit(rootContext, 'dir', 'getRootNode'),
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Scrollbar: {
    dataAttr: dataAttrDoc.Scrollbar,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      orientation: {
        type: "'horizontal' | 'vertical'",
        defaultValue: "'vertical'",
        description: 'The orientation of the scrollbar.',
      },
    },
  },
  Thumb: {
    dataAttr: dataAttrDoc.Thumb,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Viewport: {
    dataAttr: dataAttrDoc.Viewport,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
