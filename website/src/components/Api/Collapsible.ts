import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {omit} from 'es-toolkit/compat';
import {collapsibleAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('collapsible');
const rootContext = getApiDoc('collapsible').context;

export default apiEntryFromAnatomy(collapsibleAnatomy)({
  Content: {
    dataAttr: dataAttrDoc.Content,
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

      ids: {
        type: '{\n\troot?: string;\n\tcontent?: string;\n\ttrigger?: string;\n}',
        description: 'The ids of the elements in the collapsible. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      lazyMount: {
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether to enable lazy mounting.',
      },
      keepMounted: {
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to keep the component mounted after exit.',
      },
      animateOnMount: {
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to run the enter animation when the component mounts.',
      },
      onExitComplete: {
        type: '() => void',
        description: 'Callback that fires when the exit animation of the dialog completes.',
      },
    },
  },
  Trigger: {
    dataAttr: dataAttrDoc.Trigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
