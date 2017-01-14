import React, { PropTypes } from 'react';

import Templates from '../Templates';

const TemplateForm = props =>
  <form id="templateForm">
    <select
      name="template"
      onChange={props.onUpdateTemplate}
      value={props.template}
    >
      {Templates.map(component =>
        <option
          value={component.id}
          key={component.id}
        >
          {component.name}
        </option>,
      )}
    </select>
  </form>
;

TemplateForm.propTypes = {
  template: PropTypes.string.isRequired,
  onUpdateTemplate: PropTypes.func.isRequired,
};

export default TemplateForm;
