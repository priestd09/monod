import React, { PropTypes } from 'react';

import TemplateForm from './TemplateForm';
import FullscreenButton from './FullscreenButton';
import ShareModalButton from './ShareModalButton';
import InputName from './InputName';


const Toolbar = props =>
  <div id="toolbar">
    <InputName
      name={props.name}
      onUpdateName={props.onUpdateName}
    />
    <div className="actions">
      <ShareModalButton
        onToggleShareModal={props.onToggleShareModal}
        enableShareModalButton={props.enableShareModalButton}
      />
      <FullscreenButton
        onTogglePresentationMode={props.onTogglePresentationMode}
      />
    </div>
    <TemplateForm
      template={props.template}
      onUpdateTemplate={props.onUpdateTemplate}
    />
  </div>
;

Toolbar.propTypes = {
  template: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onUpdateTemplate: PropTypes.func.isRequired,
  onTogglePresentationMode: PropTypes.func.isRequired,
  onToggleShareModal: PropTypes.func.isRequired,
  enableShareModalButton: PropTypes.bool.isRequired,
  onUpdateName: PropTypes.func.isRequired,
};

export default Toolbar;
