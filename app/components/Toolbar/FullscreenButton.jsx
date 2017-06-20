import PropTypes from 'prop-types';
import React from 'react';


const FullscreenButton = props =>
  <button
    className="action fullscreen"
    title="Presentation mode"
    onClick={props.onTogglePresentationMode}
  >
    <i className="fa fa-play-circle" aria-hidden="true" />
  </button>
;

FullscreenButton.propTypes = {
  onTogglePresentationMode: PropTypes.func.isRequired,
};

export default FullscreenButton;
