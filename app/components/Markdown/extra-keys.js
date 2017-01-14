import { saveAs } from 'file-saver';
import codemirror from 'codemirror';
import isEqual from 'lodash.isequal';

export const mac = isEqual(codemirror.keyMap.default, codemirror.keyMap.macDefault);
export const pre = mac ? 'Cmd-' : 'Ctrl-';

export const Tags = {
  STRONG: '**',
  ITALIC: '_',
};

function escapeRegExp(string) {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'); // eslint-disable-line
}

export function addOrRemoveTag(tag, selection) {
  const regex = new RegExp(`^${escapeRegExp(tag)}([^]+?)${escapeRegExp(tag)}$`);
  const matches = selection.match(regex, 'gi');

  if (null !== matches) {
    return matches[1];
  }

  return `${tag}${selection}${tag}`;
}

const extraKeys = {};

extraKeys[`${pre}Z`] = (cm) => {
  cm.undo();
};

extraKeys[`${pre}B`] = (cm) => {
  cm.replaceSelection(addOrRemoveTag(Tags.STRONG, cm.getSelection()), 'around');
};

extraKeys[`${pre}I`] = (cm) => {
  cm.replaceSelection(addOrRemoveTag(Tags.ITALIC, cm.getSelection()), 'around');
};

extraKeys[`${pre}S`] = (cm) => {
  saveAs(new Blob([cm.getValue()], { type: 'text/plain' }), 'monod.md');
};

export default extraKeys;
