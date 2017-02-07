/* eslint new-cap: 0 */
import { Record } from 'immutable';
import uuid from 'uuid';
import config from './config';

export default class Document extends Record({
  uuid: uuid.v4(),
  name: config.DEFAULT_NAME,
  content: config.DEFAULT_CONTENT,
  last_modified: null, // defined by the server
  last_modified_locally: null,
  template: '',
  readonly: false,
}) {

  hasDefaultContent() {
    return config.DEFAULT_CONTENT === this.content;
  }

  hasNeverBeenSync() {
    return null === this.last_modified;
  }

  hasNoLocalChanges() {
    return null === this.last_modified_locally;
  }

  isDefault() {
    return this.hasDefaultContent() && this.hasNeverBeenSync() && this.hasNoLocalChanges();
  }

  isReadOnly() {
    return true === this.readonly;
  }

  getName() {
    return this.name;
  }
}
