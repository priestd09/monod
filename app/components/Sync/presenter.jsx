import PropTypes from 'prop-types';
import React from 'react';

import config from '../../config';


const Sync = (props) => {
  let title = config.SYNC_ONLINE_MESSAGE;
  let message = '';

  if (props.offline) {
    title = config.SYNC_OFFLINE_MESSAGE;
    message = (<span>&nbsp;Offline</span>);
  }

  return (
    <div className="sync">
      <span className={props.offline ? 'status is-offline' : 'status is-online'}>
        <i
          title={title}
          className={props.offline ? 'fa fa-toggle-off' : 'fa fa-toggle-on'}
        />
        {message}
      </span>
    </div>
  );
};

Sync.propTypes = {
  offline: PropTypes.bool.isRequired,
};

export default Sync;
