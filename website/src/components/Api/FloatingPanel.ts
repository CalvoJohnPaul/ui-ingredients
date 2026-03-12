import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {omit} from 'es-toolkit/compat';
import {floatingPanelAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('floating-panel');
const rootContext = getApiDoc('floating-panel').context;

export default apiEntryFromAnatomy(floatingPanelAnatomy)({
  Root: {
    context: {
      ...omit(rootContext, 'dir', 'getRootNode'),

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
        description: 'Callback that fires when the exit animation of the panel completes.',
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
  Positioner: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Content: {
    dataAttr: dataAttrDoc.Content,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Header: {
    dataAttr: dataAttrDoc.Header,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Body: {
    dataAttr: dataAttrDoc.Body,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Title: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  DragTrigger: {
    dataAttr: dataAttrDoc.DragTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Control: {
    dataAttr: dataAttrDoc.Control,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  StageTrigger: {
    dataAttr: dataAttrDoc.StageTrigger,
    context: {
      stage: {
        type: '"default" | "minimized" | "maximized"',
        description: 'The stage to apply when triggered.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  CloseTrigger: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ResizeTrigger: {
    dataAttr: dataAttrDoc.ResizeTrigger,
    context: {
      axis: {
        type: '"n" | "e" | "s" | "w" | "ne" | "se" | "sw" | "nw"',
        description: 'The axis used to resize the panel.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
