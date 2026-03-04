import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {omit} from 'es-toolkit/compat';
import {marqueeAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('marquee');
const rootContext = getApiDoc('marquee').context;

export default apiEntryFromAnatomy(marqueeAnatomy)({
  Content: {
    dataAttr: dataAttrDoc.Content,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Edge: {
    dataAttr: dataAttrDoc.Edge,
    context: {
      side: {
        type: "'start' | 'end'",
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Item: {
    dataAttr: dataAttrDoc.Item,
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
