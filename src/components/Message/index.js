import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUI } from 'semantic-ui-react';

const Message = ({ message, hideMessage }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideMessage();
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [message]);

  return (
    <MessageUI>{message}</MessageUI>
  );
};

// Validation des props
Message.propTypes = {
  message: PropTypes.string.isRequired,
  hideMessage: PropTypes.func.isRequired,
};

export default Message;
