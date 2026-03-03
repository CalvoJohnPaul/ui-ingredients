import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {omit} from 'es-toolkit/compat';
import {comboboxAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('combobox');
const rootContext = getApiDoc('combobox').context;

export default apiEntryFromAnatomy(comboboxAnatomy)({
  ClearTrigger: {
    dataAttr: dataAttrDoc.ClearTrigger,
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
  Control: {
    dataAttr: dataAttrDoc.Control,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Input: {
    dataAttr: dataAttrDoc.Input,
    context: {
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
      item: {
        type: 'any',
        description: 'The item data.',
      },
      persistFocus: {
        type: 'boolean',
        description: 'Whether hovering outside should clear the highlighted state.',
      },
    },
  },
  ItemGroup: {
    dataAttr: dataAttrDoc.ItemGroup,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemGroupLabel: {
    dataAttr: dataAttrDoc.ItemGroupLabel,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemIndicator: {
    dataAttr: dataAttrDoc.ItemIndicator,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemText: {
    dataAttr: dataAttrDoc.ItemText,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Label: {
    dataAttr: dataAttrDoc.Label,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  List: {
    dataAttr: dataAttrDoc.List,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Positioner: {
    dataAttr: dataAttrDoc.Positioner,
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
        type: '{\n\troot?: string;\n\tlabel?: string;\n\tcontrol?: string;\n\tinput?: string;\n\tcontent?: string;\n\ttrigger?: string;\n\tclearTrigger?: string;\n\titem(id: string, index?: number)?: string;\n\tpositioner?: string;\n\titemGroup(id: string | number)?: string;\n\titemGroupLabel(id: string | number)?: string;\n}',
        description: 'The ids of the elements in the combobox. Useful for composition.',
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
      focusable: {
        type: 'boolean',
        description: 'Whether the trigger is focusable.',
      },
    },
  },
});
